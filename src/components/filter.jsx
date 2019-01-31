import React from 'react';
import propTypes from 'prop-types';

const filter = ({
  localities,
  regions,
  currentRegion,
  regionHandle,
  localityHandle,
}) => (
  <div>
    <select onChange={regionHandle}>
      <option value="">-select region-</option>
      {regions.map(region => (
        <option key={region.id} value={region.id}>{region.name}</option>
      ))}
    </select>
    <select onChange={localityHandle}>
      <option value="">-select locality-</option>
      {localities
        .filter(locality => locality.regionid === currentRegion)
        .map(locality => (
          <option key={locality.id} value={locality.id}>{locality.name}</option>
        ))}
    </select>
  </div>
);

filter.propTypes = {
  localities: propTypes.instanceOf(Array).isRequired,
  regions: propTypes.instanceOf(Array).isRequired,
  currentRegion: propTypes.string,
  regionHandle: propTypes.func.isRequired,
  localityHandle: propTypes.func.isRequired,
};

filter.defaultProps = {
  currentRegion: null,
};

export default filter;
