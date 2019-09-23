import axios from 'axios';
import serverUrl from './serverUrl';
import {
  AD_POPUP_SHOW_STATUS_CHANGE,
  FETCH_AD_POPUP_REQUEST,
  FETCH_AD_POPUP_SUCCESS,
  FETCH_AD_POPUP_FAILURE,
  FETCH_AD_POPUP_PICS_REQUEST,
  FETCH_AD_POPUP_PICS_SUCCESS,
  FETCH_AD_POPUP_PICS_FAILURE,
} from './actionsTypes';

const changeAdPopupStatus = () => ({
  type: AD_POPUP_SHOW_STATUS_CHANGE,
});

const fetchAdPopupRequest = () => ({
  type: FETCH_AD_POPUP_REQUEST,
});

const fetchAdPopupSuccess = data => ({
  type: FETCH_AD_POPUP_SUCCESS,
  payload: data,
});

const fetchAdPopupFailure = error => ({
  type: FETCH_AD_POPUP_FAILURE,
  payload: error,
});

const fetchAdPopupData = adId => (
  (dispatch) => {
    const url = `${serverUrl}/ads/id/${adId}`;
    dispatch(fetchAdPopupRequest());
    return axios.get(url)
      .then((response) => { dispatch(fetchAdPopupSuccess(response.data)); })
      .catch((e) => { dispatch(fetchAdPopupFailure(e.message)); });
  }
);

const fetchAdPopupPicsRequest = () => ({
  type: FETCH_AD_POPUP_PICS_REQUEST,
});

const fetchAdPopupPicsSuccess = pics => ({
  type: FETCH_AD_POPUP_PICS_SUCCESS,
  payload: pics,
});

const fetchAdPopupPicsFailure = error => ({
  type: FETCH_AD_POPUP_PICS_FAILURE,
  payload: error,
});

const fetchAdPopupPics = adId => (
  (dispatch) => {
    const url = `${serverUrl}/ads/pics/${adId}`;
    dispatch(fetchAdPopupPicsRequest());
    return axios.get(url)
      .then((response) => { dispatch(fetchAdPopupPicsSuccess(response.data)); })
      .catch((e) => { dispatch(fetchAdPopupPicsFailure(e.message)); });
  }
);

export {
  changeAdPopupStatus,
  fetchAdPopupData,
  fetchAdPopupPics,
};
