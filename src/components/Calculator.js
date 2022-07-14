import React, { useState } from 'react';
import calculate from './logic/calculate';
import DigitsBtn from './Digits';

const CreateCalculator = () => {
  const [calculatorWorkingObject, setCalculator] = useState(
    {
      total: 0,
      next: '',
      operation: '',
    },
  );

  const handleClick = (adc) => {
    const buttonName = adc.target.innerText;
    setCalculator((prevState) => calculate(prevState, buttonName));
  };

  const { total, operation, next } = calculatorWorkingObject;

  return (
    <div className="container">
      <h3>Lets do some maths!</h3>
      <div className="calc-container">
        <div className="show-result" data-testid="display-result">
          {total}
          {operation}
          {next}
        </div>

        <div className="special-fxn">
          <button className="btn-fxn" type="button" onClick={handleClick} data-testid="btn-AC">AC</button>
          <button className="btn-fxn" type="button" onClick={handleClick}>+/-</button>
          <button className="btn-fxn" type="button" onClick={handleClick}>%</button>
        </div>

        <DigitsBtn handleClick={handleClick} />

        <div className="zero-dot">
          <button type="button" className="zero-btn" onClick={handleClick}>0</button>
          <button type="button" className="dot-btn" onClick={handleClick}>.</button>
        </div>

        <div className="operators">
          <button className="op-btn" type="button" onClick={handleClick}>&#247;</button>
          <button className="op-btn" type="button" onClick={handleClick}>x</button>
          <button className="op-btn" type="button" onClick={handleClick}>-</button>
          <button className="op-btn" type="button" onClick={handleClick}>+</button>
          <button className="op-btn" type="button" onClick={handleClick}>=</button>
        </div>

      </div>
    </div>
  );
};

export default CreateCalculator;
