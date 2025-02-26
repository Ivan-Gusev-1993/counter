import React from 'react';
import s from "./App.module.css";
import Button from "./Button";

type CountPropsType = {
    count: number
    error: string
    valueUp: ()=>void
    resetValue: ()=>void
}

const Count = (props:CountPropsType) => {
    return (
        <div>
            <div className={s.App}>


                <div className={props.count === 5 ? s.disable : s.value}>
                    {props.error ? <span className={s.error}>{props.error}</span> : props.count}
                </div>

                <div className={s.buttonPlace}>
                    <Button count={props.count} name={'inc'} onClick={props.valueUp}/>
                    <Button name={'reset'} onClick={props.resetValue}/>
                </div>

            </div>

        </div>
    );
};

export default Count;