import React from 'react';
import s from "./App.module.css";
import Input from "./Input/Input";
import Button from "./Button/Button";
import styles from "./Button/Button.module.css";

type SetupValueProps = {
    startValue: number
    setStartValue: (value:number)=>void
    maxValue: number
    setMaxValue: (value:number)=>void
    count: number
    setValueHandler: ()=>void
    setError:(value:string)=>void
    error: string
}

const SetupValue = (props:SetupValueProps) => {

    const stylesForButton = props.count === props.maxValue ||
    props.maxValue < 0 ||
    props.startValue < 0 ||
    props.startValue >= props.maxValue
        ? styles.disableButton
        : styles.button

    const checkValue = ()=>{
        if (props.maxValue < 0 || props.startValue < 0 || props.startValue >= props.maxValue){
            props.setError('incorrect value')
            console.log("ggggggggggg000000")
        }
            }

    return (
        <div>
            <div className={s.App}>
                <div   className={s.setupValue}>
                    <div>max value : <Input checkValue={checkValue} error={props.error} setError={props.setError} value={props.maxValue} callBack={props.setMaxValue}/></div>
                    <div>start value : <Input checkValue={checkValue} error={props.error} setError={props.setError} value={props.startValue} callBack={props.setStartValue}/></div>
                </div>

                <div className={s.buttonPlace}>
                    <Button styles={styles.button} count={props.count} name={'set'} onClick={props.setValueHandler}/>
                </div>

            </div>
        </div>
    );
};

export default SetupValue;