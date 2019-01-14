import axios from 'axios';
import { FETCH_ADS_SUCCESS, FETCH_ADS_FAILURE, FETCH_ADS_REQUEST } from './actionsTypes';

const fetchAdsRequest = () => ({
  type: FETCH_ADS_REQUEST,
});

const fetchAdsSuccess = ads => ({
  type: FETCH_ADS_SUCCESS,
  payload: ads,
});

const fetchAdsFailure = () => ({
  type: FETCH_ADS_FAILURE,
});

const fetchAllAds = () => (
  (dispatch) => {
    dispatch(fetchAdsRequest());
    return axios.get('http://localhost:3333/ads')
      .then((response) => {
        dispatch(fetchAdsSuccess(response.data));
      })
      .catch((e) => {
        dispatch(fetchAdsFailure(e.message));
      });
  }
);

export default fetchAllAds;
