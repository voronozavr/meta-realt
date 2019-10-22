import React from 'react';
import propTypes from 'prop-types';
import entityProps from '../../propTypes';
import MinMax from './minMax';
import Select from './select';
import Counter from './counter';
import '../../scss/filter.scss';

const bathroomOptions = [{ id: 0, name: 'separated' }, { id: 1, name: 'combined' }];
const balconyOptions = [{ id: 0, name: 'no' }, { id: 1, name: 'yes' }];

const Filter = ({
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
    <Select
      header="Region"
      handler={regionHandle}
      options={regions}
    />
    <Select
      header="Locality"
      handler={localityHandle}
      options={localities.filter(locality => locality.regionid === currentRegion)}
    />
    <MinMax header="Price" minHandler={minPriceHandle} maxHandler={maxPriceHandle} />
    <Counter
      header="Rooms count"
      count={roomsCount}
      incrementHandle={roomsIncrementHandle}
      decreaseHandle={roomsDecreaseHandle}
      resetHandle={resetRoomsHandle}
    />
    <MinMax header="Floor" minHandler={minFloorHandle} maxHandler={maxFloorHandle} />
    <MinMax header="Square" minHandler={minSquareHandle} maxHandler={maxSquareHandle} />
    <Select header="Bathroom" handler={combinedBathroomHandle} options={bathroomOptions} />
    <Select header="Balcony" handler={balconyHandle} options={balconyOptions} />
    <button className="search-btn" onClick={searchBtnHandle} type="button">Search</button>
  </div>
);

Filter.propTypes = {
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

Filter.defaultProps = {
  currentRegion: null,
  roomsCount: null,
};

export default Filter;
