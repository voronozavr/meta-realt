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
} from './actionsTypes';

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

const fetchAds = (regionid, localityid, rooms, iscombinedbathroom, hasbalcony, minPrice, maxPrice,
  minFloor, maxFloor, minSquare, maxSquare, page) => (
  (dispatch) => {
    dispatch(fetchAdsRequest());
    const url = `${serverUrl}/ads`;
    return axios.get(
      url,
      {
        params: {
          regionid,
          localityid,
          rooms,
          iscombinedbathroom,
          hasbalcony,
          minPrice,
          maxPrice,
          minFloor,
          maxFloor,
          minSquare,
          maxSquare,
          page,
        },
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

const fetchAdsCount = (regionid, localityid, rooms, iscombinedbathroom, hasbalcony, minPrice,
  maxPrice, minFloor, maxFloor, minSquare, maxSquare) => (
  (dispatch) => {
    const url = `${serverUrl}/ads/count`;
    dispatch(fetchAdsCountRequest());
    return axios.get(
      url, {
        params: {
          regionid,
          localityid,
          rooms,
          iscombinedbathroom,
          hasbalcony,
          minPrice,
          maxPrice,
          minFloor,
          maxFloor,
          minSquare,
          maxSquare,
        },
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
  pageIncrement,
  pageDecrease,
};
