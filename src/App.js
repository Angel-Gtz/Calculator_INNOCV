import './styles/App.scss';
import React, {useState} from 'react';
import FibonacciCalculator from './components/FibonacciCalculator'
import ClassicCalculator from './components/ClassicCalculator'

function App() {

  const [state, setState] = useState('classic')

  return (
    <div className="App-main-container">
      <div className="App-header-main-container">
        <div className="App-header-toggle-container">
          <button className={state === 'fibonacci'? 'App-toggle-FibonacciCalculator-button button-off': 'App-toggle-FibonacciCalculator-button'} onClick={() => setState('fibonacci')}>Fibonacci Calculator</button>
          <button className={state === 'classic'? 'App-toggle-classicCalculator-button button-off': 'App-toggle-classicCalculator-button'} onClick={() => setState('classic')}>Classic Calculator</button>
        </div>
      </div>
      <div className="App-calculator-main-container">
        {
          state==='fibonacci' && <FibonacciCalculator />
        }
        {
          state==='classic' && <ClassicCalculator />
        }
      </div>
    </div>
  );
}

export default App;
