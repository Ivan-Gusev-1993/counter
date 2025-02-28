import React, {useState} from 'react';
import './App.css';
import Count from "./Count";
import SetupValue from "./SetupValue";

function App() {
    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)

    let [count, setCount] = useState(0)
    const [error, setError] = useState('')

    const setValueHandler = () => {
        if ((startValue < 0 || maxValue < 0) || startValue >= maxValue) {
            setError('incorrect value')
            console.log('hrenovo')
        }
        setCount(startValue)
    }

    const valueUp = () => {
        if(count < maxValue){
            setCount(++count)
        }
    }

    const resetValue = () => {
        setError('')
        if((startValue < 0 || maxValue < 0) || startValue >= maxValue) {
            setStartValue(0)
            setMaxValue(0)
            setCount(0)
        }
    }



 //
    return (
        <>
            <Count
                count={count}
                error={error}
                valueUp={valueUp}
                resetValue={resetValue}
                maxValue={maxValue}
                startValue={startValue}
            />

            <SetupValue
                startValue={startValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                count={count}
                setValueHandler={setValueHandler}
                setError={setError}
                error={error}
            />
        </>
    );
}

export default App;
