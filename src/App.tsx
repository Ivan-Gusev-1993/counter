import React, {useState} from 'react';
import './App.css';
import Count from "./Count";
import SetupValue from "./SetupValue";

function App() {
    let [count, setCount] = useState(0)
    let [error, setError] = useState('')

    let [maxValue, setMaxValue] = useState(0)
    let [startValue, setStartValue] = useState(0)

    const setValueHandler = () => {
        if (startValue < 0 || maxValue < 0) {
            setError('incorrect value')

        }
    }

    const valueUp = () => {
        setCount(++count)

        // if (count > maxValue){
        //     setCount(count)
        // }
    }

    const resetValue = () => {
        setCount(0)
        setError('')
    }

    return (
        <>
            <Count
                count={count}
                error={error}
                valueUp={valueUp}
                resetValue={resetValue}
            />

            <SetupValue
                startValue={startValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                count={count}
                setValueHandler={setValueHandler}
            />
        </>
    );
}

export default App;
