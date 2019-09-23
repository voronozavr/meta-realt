import React from 'react';
import propTypes from 'prop-types';
import entityProps from '../propTypes';
import '../scss/filter.scss';

const component = ({
  localities,
  regions,
  currentRegion,
  roomsCount,
  regionHandle,
  localityHandle,
  roomsIncrementHandle,
  roomsDecreaseHandle,
  resetRoomsHandle,
}) => (
  <div className="filterBlock">
    Search
    <span role="img" aria-label="magnifyingGlass">&#128270;</span>
    <br />
    Region:
    <br />
    <select onChange={regionHandle}>
      <option value="">-select region-</option>
      {regions.map(region => (
        <option key={region.id} value={region.id}>{region.name}</option>
      ))}
    </select>
    <br />
    Locality:
    <br />
    <select onChange={localityHandle}>
      <option value="">-select locality-</option>
      {localities
        .filter(locality => locality.regionid === currentRegion)
        .map(locality => (
          <option key={locality.id} value={locality.id}>{locality.name}</option>
        ))}
    </select>
    <br />
    Rooms count:
    <br />
    {roomsCount || 0}
    <button onClick={roomsIncrementHandle} type="button">+</button>
    <button onClick={roomsDecreaseHandle} type="button">-</button>
    <button onClick={resetRoomsHandle} type="button">reset</button>
  </div>
);

component.propTypes = {
  localities: entityProps.localities.isRequired,
  regions: entityProps.regions.isRequired,
  currentRegion: propTypes.string,
  roomsCount: propTypes.number,
  regionHandle: propTypes.func.isRequired,
  localityHandle: propTypes.func.isRequired,
  roomsIncrementHandle: propTypes.func.isRequired,
  roomsDecreaseHandle: propTypes.func.isRequired,
  resetRoomsHandle: propTypes.func.isRequired,
};

component.defaultProps = {
  currentRegion: null,
  roomsCount: null,
};

export default component;
