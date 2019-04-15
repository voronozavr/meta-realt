import React from 'react';
import propTypes from 'prop-types';
import '../css/filter.css';

const component = ({
  localities,
  regions,
  currentRegion,
  regionHandle,
  localityHandle,
  roomsHandle,
}) => (
  <div className="filterBlock">
    Search
    <span role="img" aria-label="magnifyingGlass">&#128270;</span>
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
    Rooms count:
    <input onChange={roomsHandle} type="number" max="10" min="1" />
  </div>
);

component.propTypes = {
  localities: propTypes.instanceOf(Array).isRequired,
  regions: propTypes.instanceOf(Array).isRequired,
  currentRegion: propTypes.string,
  regionHandle: propTypes.func.isRequired,
  localityHandle: propTypes.func.isRequired,
  roomsHandle: propTypes.func.isRequired,
};

component.defaultProps = {
  currentRegion: null,
};

export default component;
