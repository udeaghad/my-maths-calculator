import React from 'react';

class ZeroAndDot extends React.PureComponent {
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
