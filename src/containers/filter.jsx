import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Filter from '../components/filter';
import {
  fetchAds,
  fetchAdsCount,
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

  regionHandle = (option) => {
    const { changeRegion, changeLocality } = this.props;
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
      showAds,
      currentRegion,
      currentLocality,
      currentPage,
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
        <button type="button" onClick={() => showAds(currentRegion, currentLocality, currentPage)}>show ads</button>
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
  showAds: (region, locality, page) => {
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
  showAds: propTypes.func.isRequired,
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
