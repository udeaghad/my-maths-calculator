import React from 'react';

class MathsOperators extends React.PureComponent {
  render() {
    return (
      <div className="operators">
        <button type="button">/</button>
        <button type="button">x</button>
        <button type="button">-</button>
        <button type="button">+</button>
        <button type="button">=</button>
      </div>
    );
  }
}

export default MathsOperators;
