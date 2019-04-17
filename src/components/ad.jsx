import React from 'react';
import propTypes from 'prop-types';
import entityProps from '../propTypes';
import '../css/ad.css';

const component = ({
  ad,
  clickHandle,
}) => (
  <div id={ad.id} className="ad" onClick={clickHandle} role="presentation">
    <p className="adHeadText">
      { `${ad.rooms} room(s) | ${ad.square} ` }
      m
      <sup>
        <small>
          2
        </small>
      </sup>
    </p>
    <hr />
    <img className="adMainPic" key={ad.id} src={ad['pic.url']} alt="ad-pic" />
    <hr />
    <p className="adAddress">
      <span role="img" aria-label="House">&#127968;</span>
      {ad.address}
    </p>
    <p className="adPrice">
      {`${ad.price} BYN`}
    </p>
  </div>
);

component.propTypes = {
  ad: entityProps.ad.isRequired,
  clickHandle: propTypes.func.isRequired,
};

export default component;
