import axios from 'axios';
import serverUrl from './serverUrl';
import {
  FETCH_ADS_SUCCESS,
  FETCH_ADS_FAILURE,
  FETCH_ADS_REQUEST,
  FETCH_ADS_COUNT_REQUEST,
  FETCH_ADS_COUNT_SUCCESS,
  FETCH_ADS_COUNT_FAILURE,
} from './actionsTypes';

const fetchAdsRequest = () => ({
  type: FETCH_ADS_REQUEST,
});

const fetchAdsSuccess = ads => ({
  type: FETCH_ADS_SUCCESS,
  payload: ads,
});

const fetchAdsFailure = error => ({
  type: FETCH_ADS_FAILURE,
  payload: error,
});

const fetchAds = options => (
  (dispatch) => {
    dispatch(fetchAdsRequest());
    const url = `${serverUrl}/ads`;
    return axios.get(
      url,
      {
        params: options,
      },
    )
      .then((response) => {
        dispatch(fetchAdsSuccess(response.data));
      })
      .catch((e) => {
        dispatch(fetchAdsFailure(e.message));
      });
  }
);

const fetchAdsCountRequest = () => ({
  type: FETCH_ADS_COUNT_REQUEST,
});

const fetchAdsCountSuccess = count => ({
  type: FETCH_ADS_COUNT_SUCCESS,
  payload: count,
});

const fetchAdsCountFailure = error => ({
  type: FETCH_ADS_COUNT_FAILURE,
  payload: error,
});

const fetchAdsCount = options => (
  (dispatch) => {
    const url = `${serverUrl}/ads/count`;
    dispatch(fetchAdsCountRequest());
    return axios.get(
      url, {
        params: options,
      },
    )
      .then((response) => {
        dispatch(fetchAdsCountSuccess(parseInt(response.data, 10)));
      })
      .catch((e) => {
        dispatch(fetchAdsCountFailure(e.message));
      });
  }
);

export {
  fetchAds,
  fetchAdsCount,
};
