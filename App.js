import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  // Function to update the input field when a number or operator is clicked
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Function to clear the input field
  const handleClear = () => {
    setInput('');
  };

  // Function to calculate the result
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // eval evaluates the string expression
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="screen">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}

export default App;
