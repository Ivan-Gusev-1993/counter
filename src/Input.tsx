import React, {ChangeEvent, useState} from 'react';
import s from './Input.module.css'

type InputPropsType = {
    value: number
    callBack:(value:number)=>void
}

const Input = (props: InputPropsType) => {
    const [inputValue, setInputValue]=useState(0)
    const inputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setInputValue(+e.currentTarget.value)
        props.callBack(+e.currentTarget.value)
    }
    return (
    <input className={inputValue < 0 ? s.errorInput : s.Input} onChange={inputHandler} value={inputValue} type="number"/>
    );
};

export default Input;