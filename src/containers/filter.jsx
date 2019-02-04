import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
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
      updateAds,
    } = this.props;
    if (prevProps.currentRegion !== currentRegion ||
      prevProps.currentLocality !== currentLocality) {
      updateAds(currentRegion, currentLocality, currentPage);
    }
  }

  regionHandle = (option) => {
    const {
      changeRegion,
      changeLocality,
    } = this.props;
    changeRegion(option.target.value);
    changeLocality('');
  }

  localityHandle = (option) => {
    const { changeLocality } = this.props;
    changeLocality(option.target.value);
  }

  render() {
    const {
      localities,
      regions,
      currentRegion,
    } = this.props;
    return (
      <div>
        <Filter
          regions={regions}
          localities={localities}
          currentRegion={currentRegion}
          regionHandle={this.regionHandle}
          localityHandle={this.localityHandle}
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
});

const mapDispatchToProps = dispatch => ({
  fetchRegions: () => dispatch(fetchAllRegions()),
  fetchLocalities: () => dispatch(fetchAllLocalities()),
  updateAds: (region, locality, page) => {
    dispatch(resetCurrentPage());
    dispatch(fetchAdsCount(region, locality));
    dispatch(fetchAds(region, locality, page));
  },
  changeRegion: regionId => dispatch(changeCurrentRegion(regionId)),
  changeLocality: localityId => dispatch(changeCurrentLocality(localityId)),
});

filter.propTypes = {
  localities: propTypes.instanceOf(Array).isRequired,
  regions: propTypes.instanceOf(Array).isRequired,
  fetchRegions: propTypes.func.isRequired,
  fetchLocalities: propTypes.func.isRequired,
  updateAds: propTypes.func.isRequired,
  currentRegion: propTypes.string,
  currentLocality: propTypes.string,
  currentPage: propTypes.number.isRequired,
  changeRegion: propTypes.func.isRequired,
  changeLocality: propTypes.func.isRequired,
};

filter.defaultProps = {
  currentRegion: null,
  currentLocality: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(filter);
