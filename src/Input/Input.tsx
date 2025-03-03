import React, {ChangeEvent} from 'react';
import s from './Input.module.css'

type InputPropsType = {
    value: number
    callBack:(value:number)=>void
    setError:(value:string)=>void
    error: string
}

const Input = (props: InputPropsType) => {
    const inputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.callBack(+e.currentTarget.value)
        if (+e.currentTarget.value < 0){
            props.setError('incorrect value')
        }
    }
    return (
    <input className={props.value < 0 || props.error ? s.errorInput : s.Input} onChange={inputHandler} value={props.value} type="number"/>
    );
};

export default Input;