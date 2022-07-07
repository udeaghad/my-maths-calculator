import React from 'react';
import calculate from './logic/calculate';

class CreateCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const buttonName = event.target.innerHTML;
    this.setState((prevState) => calculate(prevState, buttonName));
  }

  render() {
    const { total, operation, next } = this.state;

    return (

      <div className="calc-container">
        <div className="show-result">
          {total}
          {operation}
          {next}
        </div>

        <div className="special-fxn">
          <button type="button" onClick={this.handleClick}>AC</button>
          <button type="button" onClick={this.handleClick}>+/-</button>
          <button type="button" onClick={this.handleClick}>%</button>
        </div>

        <div className="digit-btn">
          <button type="button" onClick={this.handleClick}>7</button>
          <button type="button" onClick={this.handleClick}>8</button>
          <button type="button" onClick={this.handleClick}>9</button>
          <button type="button" onClick={this.handleClick}>4</button>
          <button type="button" onClick={this.handleClick}>5</button>
          <button type="button" onClick={this.handleClick}>6</button>
          <button type="button" onClick={this.handleClick}>1</button>
          <button type="button" onClick={this.handleClick}>2</button>
          <button type="button" onClick={this.handleClick}>3</button>

        </div>

        <div className="zero-dot">
          <button type="button" className="zero-btn" onClick={this.handleClick}>0</button>
          <button type="button" className="dot-btn" onClick={this.handleClick}>.</button>
        </div>

        <div className="operators">
          <button type="button" onClick={this.handleClick}>&#247;</button>
          <button type="button" onClick={this.handleClick}>x</button>
          <button type="button" onClick={this.handleClick}>-</button>
          <button type="button" onClick={this.handleClick}>+</button>
          <button type="button" onClick={this.handleClick}>=</button>
        </div>

      </div>
    );
  }
}

export default CreateCalculator;
