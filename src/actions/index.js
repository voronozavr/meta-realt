import { FETCH_ADS_SUCCESS, FETCH_ADS_FAILURE, FETCH_ADS_REQUEST } from './actionsTypes';
import axios from 'axios';

const fetchAdsRequest = () => ({
  type: FETCH_ADS_REQUEST,
});

const fetchAdsSuccess = ads => ({
  type: FETCH_ADS_SUCCESS,
  ads,
});

const fetchAdsFailure = () => ({
  type: FETCH_ADS_FAILURE,
});

export const fetchAllAds = () => (
  (dispatch) => {
    dispatch(fetchAdsRequest());
    return axios.get('http://localhost:3333/ads/')
    .then(response => {
      dispatch(fetchAdsSuccess(response.data));
    })
    .catch(e => dispatch(fetchAdsFailure(e)));
  }
);
