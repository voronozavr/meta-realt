import {
  AD_POPUP_SHOW_STATUS_CHANGE,
  FETCH_AD_POPUP_REQUEST,
  FETCH_AD_POPUP_SUCCESS,
  FETCH_AD_POPUP_FAILURE,
} from '../actions/actionsTypes';

const initState = {
  ad: {},
  showPopup: false,
  loading: false,
  error: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case AD_POPUP_SHOW_STATUS_CHANGE:
      return {
        ...state,
        showPopup: !state.showPopup,
      };
    case FETCH_AD_POPUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_AD_POPUP_SUCCESS:
      return {
        ...state,
        loading: false,
        ad: action.payload,
      };
    case FETCH_AD_POPUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
