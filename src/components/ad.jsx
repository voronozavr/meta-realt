import React from 'react';
import propTypes from 'prop-types';
import entityProps from '../propTypes';
import '../scss/ad.scss';

const component = ({
  ad,
  clickHandle,
}) => (
  <div id={ad.id} className="ad" onClick={clickHandle} role="presentation">
    <span className="ad-head-text">
      { `${ad.rooms} room(s) | ${ad.square} ` }
      m
      <sup>
        <small>
          2
        </small>
      </sup>
    </span>
    <img className="ad-main-pic" key={ad.id} src={ad['pic.url']} alt="ad-pic" />
    <p className="ad-address">
      {ad.address}
    </p>
    <p className="ad-price">
      {`${ad.price} BYN`}
    </p>
  </div>
);

component.propTypes = {
  ad: entityProps.ad.isRequired,
  clickHandle: propTypes.func.isRequired,
};

export default component;
