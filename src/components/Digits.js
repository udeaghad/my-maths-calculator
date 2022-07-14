import React from 'react';
import PropTypes from 'prop-types';

const DigitsBtn = ({ handleClick }) => (
  <div className="digit-btn">
    <button className="btn" type="button" onClick={(event) => handleClick(event)} data-testid='btn-7'>7</button>
    <button className="btn" type="button" onClick={(event) => handleClick(event)}>8</button>
    <button className="btn" type="button" onClick={(event) => handleClick(event)}>9</button>
    <button className="btn" type="button" onClick={(event) => handleClick(event)}>4</button>
    <button className="btn" type="button" onClick={(event) => handleClick(event)}>5</button>
    <button className="btn" type="button" onClick={(event) => handleClick(event)}>6</button>
    <button className="btn" type="button" onClick={(event) => handleClick(event)}>1</button>
    <button className="btn" type="button" onClick={(event) => handleClick(event)}>2</button>
    <button className="btn" type="button" onClick={(event) => handleClick(event)}>3</button>

  </div>
);
DigitsBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default DigitsBtn;
