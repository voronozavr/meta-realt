import React from 'react';
import propTypes from 'prop-types';
import '../css/ad.css';

const ad = ({
  id,
  address,
  price,
  rooms,
  square,
  clickHandle,
}) => (
  <div id={id} className="ad" onClick={clickHandle} role="presentation">
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
  id: propTypes.string.isRequired,
  address: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  rooms: propTypes.number.isRequired,
  square: propTypes.string.isRequired,
  clickHandle: propTypes.func.isRequired,
};

export default ad;
