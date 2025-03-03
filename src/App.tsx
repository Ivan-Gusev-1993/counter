import React, {useState} from 'react';
import './App.css';
import Count from "./Count";
import SetupValue from "./SetupValue";

function App() {
    const startValueCount = Number(localStorage.getItem('start')) || 0;
    const maxValueCount = Number(localStorage.getItem('max')) || 0;
    const [maxValue, setMaxValue] = useState(maxValueCount)
    const [startValue, setStartValue] = useState(startValueCount)

    let [count, setCount] = useState(startValueCount)
    const [error, setError] = useState('')

    const setValueHandler = () => {
        if ((startValue < 0 || maxValue < 0) || startValue >= maxValue) {
            setError('incorrect value')
        }
        setCount(startValue)
        localStorage.setItem('start', JSON.stringify(startValue));
        localStorage.setItem('max', JSON.stringify(maxValue));
    }


    const valueUp = () => {
        if(count < maxValue){
            setCount(++count)
        }
    }

    const resetValue = () => {
        setError('')
        setCount(0)
        if((startValue < 0 || maxValue < 0) || startValue >= maxValue) {
            setStartValue(0)
            setMaxValue(0)
        }
    }



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
