import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class MathsOperators extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

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
