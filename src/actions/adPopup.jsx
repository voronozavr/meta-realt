import axios from 'axios';
import serverUrl from './serverUrl';
import {
  AD_POPUP_SHOW_STATUS_CHANGE,
  FETCH_AD_POPUP_REQUEST,
  FETCH_AD_POPUP_SUCCESS,
  FETCH_AD_POPUP_FAILURE,
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

export {
  changeAdPopupStatus,
  fetchAdPopupData,
};
