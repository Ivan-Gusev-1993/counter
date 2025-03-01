import React from 'react';
import s from "./App.module.css";
import styles from "./Button/Button.module.css";
import Button from "./Button/Button";

type CountPropsType = {
    count: number
    error: string
    valueUp: () => void
    resetValue: () => void
    maxValue: number
    startValue: number
}

const Count = (props:CountPropsType) => {

    const stylesForButton = props.count === props.maxValue ||
    props.maxValue < 0 ||
    props.startValue < 0 ||
    props.startValue >= props.maxValue
        ? styles.disableButton
        : styles.button

    //props.startValue >= props.maxValue
    return (
        <div>
            <div className={s.App}>

                <div className={props.count === props.maxValue && props.count !== 0 ? s.disable : s.value}>
                    {props.error ? <span className={s.error}>{props.error}</span> : props.count}
                </div>

                <div className={s.buttonPlace}>
                    <Button styles={stylesForButton}
                            count={props.count} maxValue={props.maxValue} name={'inc'} onClick={props.valueUp}
                    />
                    <Button styles={styles.button} name={'reset'} onClick={props.resetValue}/>
                </div>

            </div>

        </div>
    );
};

export default Count;