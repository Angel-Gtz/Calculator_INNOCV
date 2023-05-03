import { useState } from 'react'

const ClassicCalculator = () => {

    
    const operators = ['+', '-', '*', '/']
    const [result, setResult] = useState('')
    const [number, setNumber] = useState('')
  
    const reset = () => {
      setResult('')
      setNumber('')
    }

    const handleDelete = () => {
        setNumber(number.slice(0, -1));
    }

    const handleClick = (event) => {
        const buttonValue = event.target.textContent;
        if (operators.includes(buttonValue)) {
          setNumber(number + buttonValue);
        }
    }
    
    
    const handleResult = () => {
      const expression = number;
      const result = eval(expression);
      setResult(result);
    }


    return (

        // CALCULATOR SCREEN CONTAINER:

        <div className="classicCalculator-main-container">
            <div className="classicCalculator-screen-container">
                { result &&
                    <div className="classicCalculator-screen-left-inner-container">
                        <p className="classicCalculator-screen-text">Result:</p>
                        <p className="classicCalculator-screen-result">{result}</p>
                    </div>
                }
                { !result &&
                    <p className="classicCalculator-screen-number">{number}</p>
                }
            </div>

            {/* // CALCULATOR KEYS CONTAINER:  */}

            <div className='classicCalculator-operators-container'>
                {
                    operators.map( el => {
                        return (
                            <div className="classicCalculator-number-key" key={el} onClick={() => setNumber(number + el)}>
                                <p>{el === '/' ? '÷' : el}</p>
                            </div>
                        )
                    })
                }

            </div>
            <div className="classicCalculator-keys-container">

                <div className="classicCalculator-numbers-container">
                    
                    {
                        new Array(9).fill(0).map((val, index) => {
                            return (
                                <div className="classicCalculator-number-key" key={index}  name={index + 1} onClick={() => setNumber(number + `${index + 1}`)}>
                                    <p>{index + 1}</p>
                                 </div>
                            )
                        })
                    }
                    <div className='classicCalculator-bottom-container'>
                        <div className="classicCalculator-number-cero" onClick={() => setNumber(number + 0)}>
                            <p>0</p>
                        </div>
                        <div className="classicCalculator-number-key" onClick={() => setNumber(number + '.')}>
                            <p>.</p>
                        </div>
                    </div>
                </div>
                <div className="classicCalculator-operation-keys-container">
                    <div className="classicCalculator-reset-button" onClick={handleDelete}>
                        <p>←</p>
                    </div>
                    <div className="classicCalculator-reset-button" onClick={reset}>
                        <p>CE</p>
                    </div>
                    <div className="classicCalculator-calculate-button" onClick={handleResult}>
                        <p>=</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassicCalculator
