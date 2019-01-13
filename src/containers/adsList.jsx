import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import AdsList from '../components/adsList';

class adsList extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

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
  ads: state.ads.ads,
  isFetching: state.ads.loading,
  error: state.ads.error,
});

adsList.propTypes = {
  ads: propTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(adsList);
