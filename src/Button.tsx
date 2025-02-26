import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    onClick?: () => void
    name: string
    count?: number
}

const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        if (props.onClick) {
            props.onClick()
        }
    }
    return (
        <button className={props.count === 5 ? s.disableButton : s.button} onClick={onClickHandler}>{props.name}</button>
    );
};

export default Button;