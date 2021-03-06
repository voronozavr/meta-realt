import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import entityProps from '../propTypes';
import List from '../components/adsList';
import { fetchAdPopupData, fetchAdPopupPics, changeAdPopupStatus } from '../actions/adPopup';
import '../scss/adsList.scss';

class AdsList extends PureComponent {
  adClickHandle = (e) => {
    const { showPopup } = this.props;
    showPopup(e.currentTarget.id);
  }

  render() {
    const {
      ads,
      loading,
    } = this.props;
    return (
      loading ? <p className="loading-text">Loading</p>
        : <List ads={ads} clickHandle={this.adClickHandle} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showPopup: (id) => {
    dispatch(fetchAdPopupData(id));
    dispatch(fetchAdPopupPics(id));
    dispatch(changeAdPopupStatus());
  },
});

const mapStateToProps = state => ({
  ads: state.entities.ads,
  loading: state.entities.loading,
  error: state.entities.error,
});

AdsList.propTypes = {
  ads: entityProps.ads.isRequired,
  loading: propTypes.bool.isRequired,
  showPopup: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdsList);
