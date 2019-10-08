import React from 'react';
import propTypes from 'prop-types';
import entityProps from '../propTypes';
import Ad from './ad';
import '../scss/adsList.scss';

const adsList = ({ ads, clickHandle }) => (
  <div className="ads-list-container">
    {ads.map(ad => (
      <Ad
        key={ad.id}
        ad={ad}
        clickHandle={clickHandle}
      />
    ))}
  </div>
);

adsList.propTypes = {
  ads: entityProps.ads.isRequired,
  clickHandle: propTypes.func.isRequired,
};

export default adsList;
