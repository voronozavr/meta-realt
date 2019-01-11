import {FETCH_ADS} from './ActionsTypes';
import axios from 'axios';

export const fetchAds = ads => {
    return {
        type: FETCH_ADS,
        ads
    };
};

export const fetchAllAds = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3333/ads/')
        .then(response => {
            dispatch(fetchAds(response.data));
        })
        .catch(e => {
            throw(e);
        });
    };
};
