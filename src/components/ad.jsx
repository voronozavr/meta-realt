import React from 'react';
import propTypes from 'prop-types';
import '../css/ad.css';

const ad = ({
  address,
  price,
  rooms,
  square,
}) => (
  <div className="ad">
    <p className="adHeadText">
      { `${rooms} room(s) | ${square} ` }
      m
      <sup>
        <small>
          2
        </small>
      </sup>
    </p>
    <hr />
    <p className="adAddress">
      <span role="img" aria-label="House">&#127968;</span>
      {address}
    </p>
    <p className="adPrice">
      {`${price} BYN`}
    </p>
  </div>
);

ad.propTypes = {
  address: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  rooms: propTypes.number.isRequired,
  square: propTypes.string.isRequired,
};

export default ad;
