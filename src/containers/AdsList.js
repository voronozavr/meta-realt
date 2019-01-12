import React from 'react';
import { connect } from 'react-redux';
import Ad from '../components/ad';

const AdsList = ( { ads } ) => (
  <div>
    {ads.map((ad, key) => (
      <Ad
        key={key}
        address={ad.address}
        price={ad.price}
        rooms={ad.rooms}
        square={ad.square}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  ads: state.ads,
  isFetching: state.isFetching,
  error: state.error,
});

export default connect(mapStateToProps)(AdsList);
