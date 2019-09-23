import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import entityProps from '../propTypes';
import Filter from '../components/filter';
import {
  fetchAds,
  fetchAdsCount,
  resetCurrentPage,
} from '../actions/ads';
import {
  fetchAllLocalities,
  fetchAllRegions,
  changeCurrentRegion,
  changeCurrentLocality,
  changeRoomsCount,
} from '../actions/filter';

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
      currentRegion,
      currentLocality,
      roomsCount,
      updateAds,
    } = this.props;
    if (prevProps.currentRegion !== currentRegion ||
      prevProps.currentLocality !== currentLocality ||
      prevProps.roomsCount !== roomsCount) {
      updateAds(currentRegion, currentLocality, roomsCount, currentPage);
    }
  }

  regionHandle = (option) => {
    const {
      changeRegion,
      changeLocality,
    } = this.props;
    const regionId = option.target.value !== '' ? option.target.value : null;
    changeRegion(regionId);
    changeLocality(null);
  }

  localityHandle = (option) => {
    const { changeLocality } = this.props;
    changeLocality(option.target.value);
  }

  roomsIncrementHandle = () => {
    const { changeRooms, roomsCount } = this.props;
    if (roomsCount < 10) {
      changeRooms(roomsCount + 1);
    }
  }

  roomsDecreaseHandle = () => {
    const { changeRooms, roomsCount } = this.props;
    if (roomsCount > 0) {
      changeRooms(roomsCount - 1);
    }
  }

  resetRoomsHandle = () => {
    const { changeRooms } = this.props;
    changeRooms(null);
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
          roomsIncrementHandle={this.roomsIncrementHandle}
          roomsDecreaseHandle={this.roomsDecreaseHandle}
          resetRoomsHandle={this.resetRoomsHandle}
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
  currentPage: state.entities.currentPage,
  roomsCount: state.filter.roomsCount,
});

const mapDispatchToProps = dispatch => ({
  fetchRegions: () => dispatch(fetchAllRegions()),
  fetchLocalities: () => dispatch(fetchAllLocalities()),
  updateAds: (region, locality, rooms, page) => {
    dispatch(resetCurrentPage());
    dispatch(fetchAdsCount(region, locality, rooms));
    dispatch(fetchAds(region, locality, rooms, page));
  },
  changeRegion: regionId => dispatch(changeCurrentRegion(regionId)),
  changeLocality: localityId => dispatch(changeCurrentLocality(localityId)),
  changeRooms: rooms => dispatch(changeRoomsCount(rooms)),
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
  changeRegion: propTypes.func.isRequired,
  changeLocality: propTypes.func.isRequired,
  changeRooms: propTypes.func.isRequired,
};

filter.defaultProps = {
  currentRegion: null,
  currentLocality: null,
  roomsCount: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(filter);
