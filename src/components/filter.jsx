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
  minPriceHandle,
  maxPriceHandle,
  roomsIncrementHandle,
  roomsDecreaseHandle,
  resetRoomsHandle,
  minFloorHandle,
  maxFloorHandle,
  minSquareHandle,
  maxSquareHandle,
  combinedBathroomHandle,
  balconyHandle,
  searchBtnHandle,
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
    Price:
    <br />
    <input onChange={minPriceHandle} placeholder="min" />
    <input onChange={maxPriceHandle} placeholder="max" />
    <br />
    Rooms count:
    <br />
    {roomsCount || 0}
    <button onClick={roomsIncrementHandle} type="button">+</button>
    <button onClick={roomsDecreaseHandle} type="button">-</button>
    <button onClick={resetRoomsHandle} type="button">reset</button>
    <br />
    Floor:
    <br />
    <input onChange={minFloorHandle} placeholder="min" type="number" min="1" />
    <input onChange={maxFloorHandle} placeholder="max" type="number" min="1" />
    <br />
    Square:
    <br />
    <input onChange={minSquareHandle} placeholder="min" />
    <input onChange={maxSquareHandle} placeholder="max" />
    <br />
    Bathroom:
    <select onChange={combinedBathroomHandle}>
      <option value="">-select-</option>
      <option value="1">combined</option>
      <option value="0">separated</option>
    </select>
    <br />
    Balcony:
    <select onChange={balconyHandle}>
      <option value="">-select-</option>
      <option value="1">yes</option>
      <option value="0">no</option>
    </select>
    <br />
    <button onClick={searchBtnHandle} type="button">Search</button>
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
  minPriceHandle: propTypes.func.isRequired,
  maxPriceHandle: propTypes.func.isRequired,
  minFloorHandle: propTypes.func.isRequired,
  maxFloorHandle: propTypes.func.isRequired,
  minSquareHandle: propTypes.func.isRequired,
  maxSquareHandle: propTypes.func.isRequired,
  combinedBathroomHandle: propTypes.func.isRequired,
  balconyHandle: propTypes.func.isRequired,
  searchBtnHandle: propTypes.func.isRequired,
};

component.defaultProps = {
  currentRegion: null,
  roomsCount: null,
};

export default component;
