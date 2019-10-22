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
  <div className="filter-block">
    <span className="search-text-header">Search options</span>
    <div className="search-option-block">
      <span className="search-text-option">Region</span>
      <select onChange={regionHandle}>
        <option value="">-select region-</option>
        {regions.map(region => (
          <option key={region.id} value={region.id}>{region.name}</option>
        ))}
      </select>
    </div>
    <div className="search-option-block">
      <span className="search-text-option">Locality</span>
      <select onChange={localityHandle}>
        <option value="">-select locality-</option>
        {localities
          .filter(locality => locality.regionid === currentRegion)
          .map(locality => (
            <option key={locality.id} value={locality.id}>{locality.name}</option>
          ))}
      </select>
    </div>
    <div className="search-option-block">
      <span className="search-text-option">Price</span>
      <br />
      <input onChange={minPriceHandle} placeholder="min" />
      <input onChange={maxPriceHandle} placeholder="max" />
    </div>
    <div className="search-option-block">
      <span className="search-text-option">Rooms count</span>
      <br />
      {roomsCount || 0}
      <button className="rooms-btn" onClick={roomsIncrementHandle} type="button">+</button>
      <button className="rooms-btn" onClick={roomsDecreaseHandle} type="button">-</button>
      <button className="rooms-btn" onClick={resetRoomsHandle} type="button">reset</button>
    </div>
    <div className="search-option-block">
      <span className="search-text-option">Floor</span>
      <br />
      <input onChange={minFloorHandle} placeholder="min" type="number" min="1" />
      <input onChange={maxFloorHandle} placeholder="max" type="number" min="1" />
    </div>
    <div className="search-option-block">
      <span className="search-text-option">Square</span>
      <br />
      <input onChange={minSquareHandle} placeholder="min" />
      <input onChange={maxSquareHandle} placeholder="max" />
    </div>
    <div className="search-option-block">
      <span className="search-text-option">Bathroom</span>
      <select onChange={combinedBathroomHandle}>
        <option value="">-select-</option>
        <option value="1">combined</option>
        <option value="0">separated</option>
      </select>
    </div>
    <div className="search-option-block">
      <span className="search-text-option">Balcony</span>
      <select onChange={balconyHandle}>
        <option value="">-select-</option>
        <option value="1">yes</option>
        <option value="0">no</option>
      </select>
    </div>
    <button className="search-btn" onClick={searchBtnHandle} type="button">Search</button>
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
