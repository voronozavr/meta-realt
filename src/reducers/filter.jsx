import {
  FETCH_LOCALITIES_REQUEST,
  FETCH_LOCALITIES_SUCCESS,
  FETCH_LOCALITIES_FAILURE,
  FETCH_REGIONS_REQUEST,
  FETCH_REGIONS_SUCCESS,
  FETCH_REGIONS_FAILURE,
  SEARCH_FILTER_CHANGE,
} from '../actions/actionsTypes';

const initState = {
  localities: [],
  regions: [],
  currentRegion: null,
  currentLocality: null,
  roomsCount: null,
  minPrice: null,
  maxPrice: null,
  minFloor: null,
  maxFloor: null,
  minSquare: null,
  maxSquare: null,
  combinedBathroom: null,
  balcony: null,
  loading: false,
  error: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_LOCALITIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_LOCALITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        localities: action.payload,
      };
    case FETCH_LOCALITIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_REGIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_REGIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        regions: action.payload,
      };
    case FETCH_REGIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SEARCH_FILTER_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
