import {
  FETCH_ADS_SUCCESS,
  FETCH_ADS_FAILURE,
  FETCH_ADS_REQUEST,
  FETCH_ADS_COUNT_REQUEST,
  FETCH_ADS_COUNT_SUCCESS,
  FETCH_ADS_COUNT_FAILURE,
} from '../actions/actionsTypes';

const initState = {
  ads: [],
  adsCount: 0,
  currentPage: 1,
  loading: false,
  error: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_ADS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ADS_SUCCESS:
      return {
        ...state,
        loading: false,
        ads: action.payload,
      };
    case FETCH_ADS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_ADS_COUNT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ADS_COUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        adsCount: action.payload,
      };
    case FETCH_ADS_COUNT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
