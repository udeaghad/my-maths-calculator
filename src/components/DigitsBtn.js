import React from 'react';
// import ReactDOM from 'react-dom/client';

class Digits extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      buttonName: ''
    }
    this.handleClick = this.handleClick.bind(this)   
  }

  handleClick(event){
    this.setState({
      buttonName: event.target.innerHTML
    })
  }
  render() {
    return (
      <div className="digit-btn">
        <button type="button" onClick={this.handleClick}>{7}</button>
        <button type="button" onClick={this.handleClick}>8</button>
        <button type="button" onClick={this.handleClick}>9</button>
        <button type="button" onClick={this.handleClick}>4</button>
        <button type="button" onClick={this.handleClick}>5</button>
        <button type="button" onClick={this.handleClick}>6</button>
        <button type="button" onClick={this.handleClick}>1</button>
        <button type="button" onClick={this.handleClick}>2</button>
        <button type="button" onClick={this.handleClick}>3</button>

      </div>
    );
  }
}

export default Digits;
