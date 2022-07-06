import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SpecialFunctions extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="special-fxn">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
      </div>
    );
  }
}

export default SpecialFunctions;
