import React from 'react';

const Ads = ({address, price, rooms, square}) => {
    return (
        <div>
            <h3> {rooms} комн. / {square} м^2 </h3>
            <p> {address} </p>
            <p> {price}р. </p>
        </div>
    );
};

export default Ads;
