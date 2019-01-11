import React from 'react';
import {connect} from 'react-redux';
import Ads from '../components/Ads';

function AdsList({ads}) {
    return (
        <div>
            {ads.map((ad, key) => {
                return (
                    <Ads
                        key = {key}
                        address = {ad.address}
                        price = {ad.price}
                        rooms = {ad.rooms}
                        square = {ad.square}
                    />
                );
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ads: state.ads
    };
}

export default connect(mapStateToProps)(AdsList);
