import React from 'react';
import propTypes from 'prop-types';
import Ad from './ad';
import '../css/adsList.css';

const adsList = ({ ads, clickHandle }) => (
  <div className="adsList">
    {ads.map(ad => (
      <Ad
        key={ad.id}
        id={ad.id}
        address={ad.address}
        price={ad.price}
        rooms={ad.rooms}
        square={ad.square}
        clickHandle={clickHandle}
      />
    ))}
  </div>
);

adsList.propTypes = {
  ads: propTypes.instanceOf(Array).isRequired,
  clickHandle: propTypes.func.isRequired,
};

export default adsList;
