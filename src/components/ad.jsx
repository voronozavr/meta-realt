import React from 'react';
import propTypes from 'prop-types';

const ad = ({
  address,
  price,
  rooms,
  square,
}) => (
  <div>
    <h3>
      {`${rooms}room(s)/${square}m^2`}
    </h3>
    <p>
      {address}
    </p>
    <p>
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
