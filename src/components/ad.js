import React from 'react';

const ad = ({address, price, rooms, square}) => (
  <div>
    <h3>{ rooms }room(s)/{ square }m^2</h3>
    <p>{ address }</p>
    <p>{ price }BYN</p>
  </div>
)

export default ad;
