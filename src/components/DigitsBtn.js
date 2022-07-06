import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Digits extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

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
