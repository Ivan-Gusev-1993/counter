import React from 'react';
import s from "./App.module.css";
import Input from "./Input";
import Button from "./Button";
import styles from "./Button.module.css";

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

    return (
        <div>
            <div className={s.App}>
                <div   className={s.setupValue}>
                    <span>max value :<Input error={props.error} setError={props.setError} value={props.maxValue} callBack={props.setMaxValue}/></span>
                    <span>start value :<Input error={props.error} setError={props.setError} value={props.startValue} callBack={props.setStartValue}/></span>
                </div>

                <div className={s.buttonPlace}>
                    <Button styles={styles.button} count={props.count} name={'set'} onClick={props.setValueHandler}/>
                </div>

            </div>
        </div>
    );
};

export default SetupValue;