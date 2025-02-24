import React, {useState} from 'react';
import './App.css';
import Button from "./Button";
import s from './App.module.css'

function App() {
    let [count, setCount] = useState(0)

    const valueUp = () => {
        setCount(++count)
        if (count > 5){
            setCount(5)
        }
    }

    const resetValue = () => {
        setCount(0)
    }

    return (
        <div className={s.App}>
            <div className={count === 5 ? s.disable : s.value}>{count}</div>

            <div className={s.buttonPlace}>
                <Button count={count}  name={'inc'} onClick={valueUp}/>
                <Button zero={count} name={'reset'} onClick={resetValue}/>
            </div>


        </div>
    );
}

export default App;
