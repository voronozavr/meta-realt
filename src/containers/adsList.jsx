import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import AdsList from '../components/adsList';

class adsList extends PureComponent {
  render() {
    const { ads } = this.props;
    return (
      <div>
        <AdsList ads={ads} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ads: state.entities.ads,
  isFetching: state.entities.loading,
  error: state.entities.error,
});

adsList.propTypes = {
  ads: propTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(adsList);
