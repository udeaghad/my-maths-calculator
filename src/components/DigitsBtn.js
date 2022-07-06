import React from 'react';

class Digits extends React.PureComponent {
  render() {
    return (
      <div className="digit-btn">
        <button type="button">9</button>
        <button type="button">8</button>
        <button type="button">7</button>
        <button type="button">6</button>
        <button type="button">5</button>
        <button type="button">4</button>
        <button type="button">3</button>
        <button type="button">2</button>
        <button type="button">1</button>

      </div>
    );
  }
}

export default Digits;
