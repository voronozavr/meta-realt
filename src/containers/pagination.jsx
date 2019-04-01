import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Pagination from '../components/pagination';
import {
  pageIncrement,
  pageDecrease,
  fetchAds,
  fetchAdsCount,
} from '../actions/ads';

class pagination extends PureComponent {
  componentDidUpdate(prevProps) {
    const {
      currentPage,
      currentRegion,
      currentLocality,
      roomsCount,
      updateAds,
    } = this.props;
    if (prevProps.currentPage !== currentPage) {
      updateAds(currentRegion, currentLocality, roomsCount, currentPage);
    }
  }

  nextPageHandle = (pageCount) => {
    const { nextPage, currentPage } = this.props;
    nextPage(currentPage, pageCount);
  }

  prevPageHandle = () => {
    const { prevPage, currentPage } = this.props;
    prevPage(currentPage);
  }

  render() {
    const {
      ads,
      adsCount,
      currentPage,
    } = this.props;
    return (
      ads.length ? <Pagination
        currentPage={currentPage}
        adsCount={adsCount}
        nextPageHandle={this.nextPageHandle}
        prevPageHandle={this.prevPageHandle}
      /> : <div />
    );
  }
}

const mapStateToProps = state => ({
  ads: state.entities.ads,
  adsCount: state.entities.adsCount,
  currentPage: state.entities.currentPage,
  currentRegion: state.filter.currentRegion,
  currentLocality: state.filter.currentLocality,
  roomsCount: state.filter.roomsCount,
});

const mapDispatchToProps = dispatch => ({
  nextPage: (currentPage, lastPage) => dispatch(pageIncrement(currentPage, lastPage)),
  prevPage: currentPage => dispatch(pageDecrease(currentPage)),
  updateAds: (region, locality, rooms, page) => {
    dispatch(fetchAdsCount(region, locality, rooms));
    dispatch(fetchAds(region, locality, rooms, page));
  },
});

pagination.propTypes = {
  ads: propTypes.instanceOf(Array).isRequired,
  adsCount: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  currentRegion: propTypes.string,
  currentLocality: propTypes.string,
  roomsCount: propTypes.string,
  nextPage: propTypes.func.isRequired,
  prevPage: propTypes.func.isRequired,
  updateAds: propTypes.func.isRequired,
};

pagination.defaultProps = {
  currentRegion: null,
  currentLocality: null,
  roomsCount: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(pagination);
