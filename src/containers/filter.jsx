import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import entityProps from '../propTypes';
import Filter from '../components/filter';
import {
  fetchAds,
  fetchAdsCount,
} from '../actions/ads';
import {
  fetchAllLocalities,
  fetchAllRegions,
  changeFilter,
} from '../actions/filter';
import {
  pageReset,
} from '../actions/pagination';

class filter extends PureComponent {
  componentDidMount() {
    const {
      fetchRegions,
      fetchLocalities,
    } = this.props;
    fetchRegions();
    fetchLocalities();
  }

  componentDidUpdate(prevProps) {
    const {
      currentPage,
    } = this.props;
    if (prevProps.currentPage !== currentPage) {
      this.updateAdsList();
    }
  }

  updateFilterState = (value, key) => {
    const { changeSearchFilter } = this.props;
    changeSearchFilter({
      [key]: value,
    });
  }

  updateAdsList = () => {
    const {
      currentPage,
      currentRegion,
      currentLocality,
      roomsCount,
      minPrice,
      maxPrice,
      minFloor,
      maxFloor,
      minSquare,
      maxSquare,
      combinedBathroom,
      balcony,
      updateAds,
    } = this.props;
    updateAds(currentRegion, currentLocality, roomsCount, combinedBathroom,
      balcony, minPrice, maxPrice, minFloor, maxFloor, minSquare, maxSquare, currentPage);
  }

  searchBtnHandle = () => {
    const { resetCurrentPage } = this.props;
    resetCurrentPage();
    this.updateAdsList();
  }

  regionHandle = (option) => {
    this.updateFilterState(option.target.value || null, 'currentRegion');
    this.updateFilterState(null, 'currentLocality');
  }

  localityHandle = (option) => {
    this.updateFilterState(option.target.value || null, 'currentLocality');
  }

  roomsIncrementHandle = () => {
    const { roomsCount } = this.props;
    if (roomsCount < 10) {
      this.updateFilterState(roomsCount + 1, 'roomsCount');
    }
  }

  roomsDecreaseHandle = () => {
    const { roomsCount } = this.props;
    if (roomsCount > 1) {
      this.updateFilterState(roomsCount - 1, 'roomsCount');
    } else if (roomsCount === 1) {
      this.updateFilterState(null, 'roomsCount');
    }
  }

  resetRoomsHandle = () => {
    this.updateFilterState(null, 'roomsCount');
  }

  minPriceHandle = (option) => {
    this.updateFilterState(option.target.value || null, 'minPrice');
  }

  maxPriceHandle = (option) => {
    this.updateFilterState(option.target.value || null, 'maxPrice');
  }

  minFloorHandle = (option) => {
    const value = option.target.value !== '' ? parseInt(option.target.value, 10) : null;
    this.updateFilterState(value, 'minFloor');
  }

  maxFloorHandle = (option) => {
    const value = option.target.value !== '' ? parseInt(option.target.value, 10) : null;
    this.updateFilterState(value, 'maxFloor');
  }

  minSquareHandle = (option) => {
    const value = option.target.value !== '' ? parseFloat(option.target.value, 10) : null;
    this.updateFilterState(value, 'minSquare');
  }

  maxSquareHandle = (option) => {
    const value = option.target.value !== '' ? parseFloat(option.target.value, 10) : null;
    this.updateFilterState(value, 'maxSquare');
  }

  combinedBathroomHandle = (option) => {
    const flag = option.target.value !== '' ? (option.target.value === '1') : null;
    this.updateFilterState(flag, 'combinedBathroom');
  }

  balconyHandle = (option) => {
    const flag = option.target.value !== '' ? (option.target.value === '1') : null;
    this.updateFilterState(flag, 'balcony');
  }

  render() {
    const {
      localities,
      regions,
      currentRegion,
      roomsCount,
    } = this.props;
    return (
      <div>
        <Filter
          regions={regions}
          localities={localities}
          currentRegion={currentRegion}
          roomsCount={roomsCount}
          regionHandle={this.regionHandle}
          localityHandle={this.localityHandle}
          minPriceHandle={this.minPriceHandle}
          maxPriceHandle={this.maxPriceHandle}
          roomsIncrementHandle={this.roomsIncrementHandle}
          roomsDecreaseHandle={this.roomsDecreaseHandle}
          resetRoomsHandle={this.resetRoomsHandle}
          minFloorHandle={this.minFloorHandle}
          maxFloorHandle={this.maxFloorHandle}
          minSquareHandle={this.minSquareHandle}
          maxSquareHandle={this.maxSquareHandle}
          combinedBathroomHandle={this.combinedBathroomHandle}
          balconyHandle={this.balconyHandle}
          searchBtnHandle={this.searchBtnHandle}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  localities: state.filter.localities,
  regions: state.filter.regions,
  currentRegion: state.filter.currentRegion,
  currentLocality: state.filter.currentLocality,
  currentPage: state.pagination.currentPage,
  roomsCount: state.filter.roomsCount,
  minPrice: state.filter.minPrice,
  maxPrice: state.filter.maxPrice,
  minFloor: state.filter.minFloor,
  maxFloor: state.filter.maxFloor,
  minSquare: state.filter.minSquare,
  maxSquare: state.filter.maxSquare,
  combinedBathroom: state.filter.combinedBathroom,
  balcony: state.filter.balcony,
});

const mapDispatchToProps = dispatch => ({
  fetchRegions: () => dispatch(fetchAllRegions()),
  fetchLocalities: () => dispatch(fetchAllLocalities()),
  updateAds: (region, locality, rooms, combinedBathroom, hasBalcony, minPrice,
    maxPrice, minFloor, maxFloor, minSquare, maxSquare, page) => {
    dispatch(fetchAdsCount(region, locality, rooms, combinedBathroom, hasBalcony, minPrice,
      maxPrice, minFloor, maxFloor, minSquare, maxSquare));
    dispatch(fetchAds(region, locality, rooms, combinedBathroom, hasBalcony, minPrice,
      maxPrice, minFloor, maxFloor, minSquare, maxSquare, page));
  },
  changeSearchFilter: filterObj => dispatch(changeFilter(filterObj)),
  resetCurrentPage: () => dispatch(pageReset()),
});

filter.propTypes = {
  localities: entityProps.localities.isRequired,
  regions: entityProps.regions.isRequired,
  fetchRegions: propTypes.func.isRequired,
  fetchLocalities: propTypes.func.isRequired,
  updateAds: propTypes.func.isRequired,
  currentRegion: propTypes.string,
  currentLocality: propTypes.string,
  roomsCount: propTypes.number,
  currentPage: propTypes.number.isRequired,
  minPrice: propTypes.number,
  maxPrice: propTypes.number,
  minFloor: propTypes.number,
  maxFloor: propTypes.number,
  minSquare: propTypes.number,
  maxSquare: propTypes.number,
  combinedBathroom: propTypes.bool,
  balcony: propTypes.bool,
  changeSearchFilter: propTypes.func.isRequired,
  resetCurrentPage: propTypes.func.isRequired,
};

filter.defaultProps = {
  currentRegion: null,
  currentLocality: null,
  roomsCount: null,
  minPrice: null,
  maxPrice: null,
  minFloor: null,
  maxFloor: null,
  minSquare: null,
  maxSquare: null,
  combinedBathroom: null,
  balcony: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(filter);
