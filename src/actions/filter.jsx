import axios from 'axios';
import serverUrl from './serverUrl';
import {
  FETCH_LOCALITIES_REQUEST,
  FETCH_LOCALITIES_SUCCESS,
  FETCH_LOCALITIES_FAILURE,
  FETCH_REGIONS_REQUEST,
  FETCH_REGIONS_SUCCESS,
  FETCH_REGIONS_FAILURE,
  SEARCH_FILTER_CHANGE,
} from './actionsTypes';

const fetchLocalitiesRequest = () => ({
  type: FETCH_LOCALITIES_REQUEST,
});

const fetchLocalitiesSuccess = localities => ({
  type: FETCH_LOCALITIES_SUCCESS,
  payload: localities,
});

const fetchLocalitiesFailure = error => ({
  type: FETCH_LOCALITIES_FAILURE,
  payload: error,
});

const fetchAllLocalities = () => (
  (dispatch) => {
    dispatch(fetchLocalitiesRequest());
    return axios.get(`${serverUrl}/localities`)
      .then((response) => {
        dispatch(fetchLocalitiesSuccess(response.data));
      })
      .catch((e) => {
        dispatch(fetchLocalitiesFailure(e.message));
      });
  }
);

const fetchRegionsRequest = () => ({
  type: FETCH_REGIONS_REQUEST,
});

const fetchRegionsSuccess = regions => ({
  type: FETCH_REGIONS_SUCCESS,
  payload: regions,
});

const fetchRegionsFailure = error => ({
  type: FETCH_REGIONS_FAILURE,
  payload: error,
});

const fetchAllRegions = () => (
  (dispatch) => {
    dispatch(fetchRegionsRequest());
    return axios.get(`${serverUrl}/regions`)
      .then((response) => {
        dispatch(fetchRegionsSuccess(response.data));
      })
      .catch((e) => {
        dispatch(fetchRegionsFailure(e.message));
      });
  }
);

const changeFilter = filter => (
  dispatch => (
    dispatch({
      type: SEARCH_FILTER_CHANGE,
      payload: filter,
    })
  )
);

export {
  fetchAllLocalities,
  fetchAllRegions,
  changeFilter,
};
