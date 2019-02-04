import React from 'react';
import propTypes from 'prop-types';

const pagination = ({
  currentPage,
  adsCount,
  nextPageHandle,
  prevPageHandle,
}) => {
  const pagesCount = Math.ceil(adsCount / 20);
  return (
    <div>
      <button type="button" onClick={prevPageHandle}>prev</button>
      { `${currentPage} of ${pagesCount}` }
      <button type="button" onClick={() => nextPageHandle(pagesCount)}>next</button>
      { `total ads count: ${adsCount}` }
    </div>
  );
};

pagination.propTypes = {
  currentPage: propTypes.number.isRequired,
  adsCount: propTypes.number.isRequired,
  nextPageHandle: propTypes.func.isRequired,
  prevPageHandle: propTypes.func.isRequired,
};

export default pagination;
