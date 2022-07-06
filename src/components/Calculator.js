import React from 'react';
import SpecialFunctions from './SpecialFunctions';
import Digits from './DigitsBtn';
import ZeroAndDot from './ZeroAndDot';
import MathsOperators from './MathsOperators';

// eslint-disable-next-line react/prefer-stateless-function
class CreateCalculator extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

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
