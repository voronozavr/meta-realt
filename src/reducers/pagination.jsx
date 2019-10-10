import {
  CURRENT_PAGE_CHANGE,
} from '../actions/actionsTypes';

const initState = {
  currentPage: 1,
};

export default function (state = initState, action) {
  switch (action.type) {
    case CURRENT_PAGE_CHANGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}
