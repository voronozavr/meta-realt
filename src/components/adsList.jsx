import React from 'react';
import propTypes from 'prop-types';
import Ad from './ad';
import '../css/adsList.css';

const adsList = ({ ads }) => (
  <div className="adsList">
    {ads.map(ad => (
      <Ad
        key={ad.id}
        address={ad.address}
        price={ad.price}
        rooms={ad.rooms}
        square={ad.square}
      />
    ))}
  </div>
);

adsList.propTypes = {
  ads: propTypes.instanceOf(Array).isRequired,
};

export default adsList;
