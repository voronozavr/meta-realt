import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({
  header,
  count,
  incrementHandle,
  decreaseHandle,
  resetHandle,
}) => (
  <div className="search-option-block">
    <span className="search-text-option">{header}</span>
    <br />
    {count || 0}
    <button className="counter-btn" onClick={incrementHandle} type="button">+</button>
    <button className="counter-btn" onClick={decreaseHandle} type="button">-</button>
    <button className="counter-btn" onClick={resetHandle} type="button">reset</button>
  </div>
);

Counter.propTypes = {
  header: PropTypes.string.isRequired,
  count: PropTypes.number,
  incrementHandle: PropTypes.func.isRequired,
  decreaseHandle: PropTypes.func.isRequired,
  resetHandle: PropTypes.func.isRequired,
};

Counter.defaultProps = {
  count: 0,
};

export default Counter;
