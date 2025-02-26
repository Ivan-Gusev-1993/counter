import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    onClick?: () => void
    name: string
    count?: number
    maxValue?: number
    styles: string
}

const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        if (props.onClick) {
            props.onClick()
        }
    }
    return (
        <button className={props.styles} onClick={onClickHandler}>{props.name}</button>
    );
};

export default Button;