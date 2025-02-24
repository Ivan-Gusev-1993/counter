import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    onClick?: () => void
    name: string
    count?: number
    zero?: number
}

const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        if (props.onClick) {
            props.onClick()
        }
    }
    return (
        <button className={props.count === 5 || props.zero === 0 ? s.disableButton : s.button} onClick={onClickHandler}>{props.name}</button>
    );
};

export default Button;