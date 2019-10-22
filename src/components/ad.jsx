import React from 'react';
import propTypes from 'prop-types';
import entityProps from '../propTypes';
import '../scss/ad.scss';

const Ad = ({
  ad: {
    id,
    rooms,
    square,
    address,
    price,
    'pic.url': pic,
  },
  clickHandle,
}) => (
  <div id={id} className="ad" onClick={clickHandle} role="presentation">
    <span className="ad-head-text">
      { `${rooms} room(s) | ${square} ` }
      m
      <sup>
        <small>
          2
        </small>
      </sup>
    </span>
    <img className="ad-main-pic" key={id} src={pic} alt="ad-pic" />
    <p className="ad-address">
      {address}
    </p>
    <p className="ad-price">
      {`${price} BYN`}
    </p>
  </div>
);

Ad.propTypes = {
  ad: entityProps.ad.isRequired,
  clickHandle: propTypes.func.isRequired,
};

export default Ad;
