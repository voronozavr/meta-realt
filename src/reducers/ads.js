import { FETCH_ADS_SUCCESS, FETCH_ADS_FAILURE, FETCH_ADS_REQUEST } from '../actions/actionsTypes';

const initState = [{
  ads: [],
  isFetching: false,
  error: false,
}];

export default function(state = initState, action) {
  switch(action.type) {
      // case FETCH_ADS_REQUEST:
      //   return {
      //     ...state,
      //     isFetching: true,
      //   };
      case FETCH_ADS_SUCCESS:
        // return {
        //   ...state,
        //   ads: action.payload,
        // };
        return action.ads;
      case FETCH_ADS_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: true,
        };
      default:
        return state;
  }
}
