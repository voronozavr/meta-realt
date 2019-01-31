import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import AdsList from '../components/adsList';

class adsList extends PureComponent {
  render() {
    const {
      ads,
      loading,
    } = this.props;
    return (
      loading ? <p>Loading</p> : <AdsList ads={ads} />
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
