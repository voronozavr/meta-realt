import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import AdsList from '../components/adsList';
import { fetchAdPopupData, changeAdPopupStatus } from '../actions/adPopup';
import '../css/adsList.css';

class adsList extends PureComponent {
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
      loading ? <p className="loadingText">Loading</p>
        : <AdsList ads={ads} clickHandle={this.adClickHandle} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showPopup: (id) => {
    dispatch(fetchAdPopupData(id));
    dispatch(changeAdPopupStatus());
  },
});

const mapStateToProps = state => ({
  ads: state.entities.ads,
  loading: state.entities.loading,
  error: state.entities.error,
});

adsList.propTypes = {
  ads: propTypes.instanceOf(Array).isRequired,
  loading: propTypes.bool.isRequired,
  showPopup: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(adsList);
