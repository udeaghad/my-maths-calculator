import React, { useState } from 'react';
import calculate from './logic/calculate';

const CreateCalculator = () => {
  const [calculatorWorkingObject, setCalculator] = useState(
    {
      total: 0,
      next: '',
      operation: '',
    },
  );

  const handleClick = (event) => {
    const buttonName = event.target.innerHTML;
    setCalculator((prevState) => calculate(prevState, buttonName));
  };

  const { total, operation, next } = calculatorWorkingObject;

  return (

    <div className="calc-container">
      <div className="show-result">
        {total}
        {operation}
        {next}
      </div>

      <div className="special-fxn">
        <button type="button" onClick={handleClick}>AC</button>
        <button type="button" onClick={handleClick}>+/-</button>
        <button type="button" onClick={handleClick}>%</button>
      </div>

      <div className="digit-btn">
        <button type="button" onClick={handleClick}>7</button>
        <button type="button" onClick={handleClick}>8</button>
        <button type="button" onClick={handleClick}>9</button>
        <button type="button" onClick={handleClick}>4</button>
        <button type="button" onClick={handleClick}>5</button>
        <button type="button" onClick={handleClick}>6</button>
        <button type="button" onClick={handleClick}>1</button>
        <button type="button" onClick={handleClick}>2</button>
        <button type="button" onClick={handleClick}>3</button>

      </div>

      <div className="zero-dot">
        <button type="button" className="zero-btn" onClick={handleClick}>0</button>
        <button type="button" className="dot-btn" onClick={handleClick}>.</button>
      </div>

      <div className="operators">
        <button type="button" onClick={handleClick}>&#247;</button>
        <button type="button" onClick={handleClick}>x</button>
        <button type="button" onClick={handleClick}>-</button>
        <button type="button" onClick={handleClick}>+</button>
        <button type="button" onClick={handleClick}>=</button>
      </div>

    </div>
  );
};

export default CreateCalculator;
