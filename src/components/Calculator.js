import React from 'react';
import SpecialFunctions from './SpecialFunctions';
import Digits from './DigitsBtn';
import ZeroAndDot from './ZeroAndDot';
import MathsOperators from './MathsOperators';

class CreateCalculator extends React.PureComponent {
  render() {
    return (
      <div className="calc-container">
        <div className="show-result">0</div>
        <SpecialFunctions />
        <Digits />
        <ZeroAndDot />
        <MathsOperators />
      </div>
    );
  }
}

export default CreateCalculator;
