import axios from 'axios';
import serverUrl from './serverUrl';
import {
  FETCH_ADS_SUCCESS,
  FETCH_ADS_FAILURE,
  FETCH_ADS_REQUEST,
  ADS_PAGE_INCREMENT,
  ADS_PAGE_DECREASE,
  FETCH_ADS_COUNT_REQUEST,
  FETCH_ADS_COUNT_SUCCESS,
  FETCH_ADS_COUNT_FAILURE,
  ADS_PAGE_RESET,
} from './actionsTypes';

const resetCurrentPage = () => (
  dispatch => (
    dispatch({
      type: ADS_PAGE_RESET,
      payload: 1,
    })
  )
);

const getNextPage = nextPage => ({
  type: ADS_PAGE_INCREMENT,
  payload: nextPage,
});

const pageIncrement = (currentPage, lastPage) => (
  dispatch => (
    dispatch(getNextPage(currentPage < lastPage ? currentPage + 1 : currentPage))
  )
);

const getPrevPage = prevPage => ({
  type: ADS_PAGE_DECREASE,
  payload: prevPage,
});

const pageDecrease = currentPage => (
  dispatch => (
    dispatch(getPrevPage(currentPage > 1 ? currentPage - 1 : currentPage))
  )
);

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

const fetchAds = (region, locality, page) => (
  (dispatch) => {
    dispatch(fetchAdsRequest());
    let url = `${serverUrl}/ads`;
    if (page) {
      url += `?page=${page}`;
    }
    if (region) {
      url += `&regionid=${region}`;
    }
    if (locality) {
      url += `&localityid=${locality}`;
    }
    return axios.get(url)
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

const fetchAdsCount = (region, locality) => (
  (dispatch) => {
    let url = `${serverUrl}/ads?count=true`;
    dispatch(fetchAdsCountRequest());
    if (region) {
      url += `&regionid=${region}`;
    }
    if (locality) {
      url += `&localityid=${locality}`;
    }
    return axios.get(url)
      .then((response) => {
        dispatch(fetchAdsCountSuccess(parseInt(response.data[0].count, 10)));
      })
      .catch((e) => {
        dispatch(fetchAdsCountFailure(e.message));
      });
  }
);

export {
  fetchAds,
  fetchAdsCount,
  pageIncrement,
  pageDecrease,
  resetCurrentPage,
};
