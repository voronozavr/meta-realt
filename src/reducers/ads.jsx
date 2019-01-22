import {
  FETCH_ADS_SUCCESS,
  FETCH_ADS_FAILURE,
  FETCH_ADS_REQUEST,
} from '../actions/actionsTypes';

const initState = {
  ads: [],
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
    default:
      return state;
  }
}
