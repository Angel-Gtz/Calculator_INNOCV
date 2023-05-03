import { useState } from 'react'

const FibonacciCalculator = () => {

    const [number, setNumber] = useState(0)
    const [result, setResult] = useState(null)


    const reset = () => {
        setResult(null)
        setNumber(0)
      }

    const calculate_fibonacci = (num) => {
        let x = 0;
        let y = 1;
        let n = 0;
    
        if(num === 1){
            return 1
        }
        
        for(let i = 0; i < num - 1; i++){
            n = x + y;
            x = y
            y = n
        }
        return n
    }

    const handleCalculation = (num) => {
        setResult(calculate_fibonacci(num))
    }


    return (
        <div className="FibonacciCalculator-main-container">
            <div className="FibonacciCalculator-title-container">
                <h1>
                    Calculate Fibonacci!
                </h1>
            </div>
            <div className="FibonacciCalculator-calculator-container">
                <input className="FibonacciCalculator-caculator-input" type='number'  id="FibonacciCalculator" name="calculator" onChange={({target}) => setNumber(target.value)} value={number}/>
                <button className="FibonacciCalculator-calculator-button" onClick={() => handleCalculation(number)}>Calculate</button>
            </div>
            <div className="FibonacciCalculator-reset-button-container">
                <button className="FibonacciCalculator-reset-button" onClick={reset}>Reset</button>
            </div>
            <div className="FibonacciCalculator-result-container">
                <h4 className="FibonacciCalculator-result-text">Fibonacci Result:   <b>{result}</b></h4>
            </div>
        </div>
    )
}

export default FibonacciCalculator
