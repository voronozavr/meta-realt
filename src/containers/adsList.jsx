import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import AdsList from '../components/adsList';
import '../css/adsList.css';

class adsList extends PureComponent {
  render() {
    const {
      ads,
      loading,
    } = this.props;
    return (
      loading ? <p className="loadingText">Loading</p> : <AdsList ads={ads} />
    );
  }
}

const mapStateToProps = state => ({
  ads: state.entities.ads,
  loading: state.entities.loading,
  error: state.entities.error,
});

adsList.propTypes = {
  ads: propTypes.instanceOf(Array).isRequired,
  loading: propTypes.bool.isRequired,
};

export default connect(mapStateToProps)(adsList);
