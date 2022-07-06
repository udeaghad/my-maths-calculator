import React from 'react';

class CreateCalculator extends React.Component {
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

class SpecialFunctions extends React.Component {
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

class Digits extends React.Component {
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

class ZeroAndDot extends React.Component {
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

class MathsOperators extends React.Component {
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

export default CreateCalculator;
