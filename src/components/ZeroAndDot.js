import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class ZeroAndDot extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="zero-dot">
        <button type="button" className="zero-btn">0</button>
        <button type="button" className="dot-btn">.</button>
      </div>
    );
  }
}

export default ZeroAndDot;
