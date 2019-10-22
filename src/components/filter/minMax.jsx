import React from 'react';
import PropTypes from 'prop-types';

const MinMax = ({ header, minHandler, maxHandler }) => (
  <div className="search-option-block">
    <span className="search-text-option">{header}</span>
    <br />
    <input onChange={minHandler} placeholder="min" />
    <input onChange={maxHandler} placeholder="max" />
  </div>
);

MinMax.propTypes = {
  header: PropTypes.string.isRequired,
  minHandler: PropTypes.func.isRequired,
  maxHandler: PropTypes.func.isRequired,
};

export default MinMax;
