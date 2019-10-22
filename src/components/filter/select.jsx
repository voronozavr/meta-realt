import React from 'react';
import PropTypes from 'prop-types';
import entityProps from '../../propTypes';

const Select = ({ header, handler, options }) => (
  <div className="search-option-block">
    <span className="search-text-option">{header}</span>
    <select onChange={handler}>
      <option value="">-select-</option>
      {options.map(option => (
        <option key={option.id} value={option.id}>{option.name}</option>
      ))}
    </select>
  </div>
);

Select.propTypes = {
  header: PropTypes.string.isRequired,
  options: PropTypes.oneOfType([
    entityProps.regions,
    entityProps.localities,
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
  ]).isRequired,
  handler: PropTypes.func.isRequired,
};

export default Select;
