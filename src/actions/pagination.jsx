import {
  CURRENT_PAGE_CHANGE,
} from './actionsTypes';

const changeCurrentPage = page => ({
  type: CURRENT_PAGE_CHANGE,
  payload: page,
});

const pageIncrement = (currentPage, lastPage) => (
  dispatch => (
    dispatch(changeCurrentPage(currentPage < lastPage ? currentPage + 1 : currentPage))
  )
);

const pageDecrease = currentPage => (
  dispatch => (
    dispatch(changeCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage))
  )
);

const pageReset = () => (
  dispatch => (
    dispatch(changeCurrentPage(1))
  )
);

export {
  pageIncrement,
  pageDecrease,
  pageReset,
};
