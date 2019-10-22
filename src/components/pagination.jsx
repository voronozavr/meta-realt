import React from 'react';
import propTypes from 'prop-types';
import '../scss/pagination.scss';

const Pagination = ({
  currentPage,
  adsCount,
  nextPageHandle,
  prevPageHandle,
}) => {
  const pagesCount = Math.ceil(adsCount / 20);
  return (
    <div className="pagination">
      <button className="page-btn" type="button" onClick={prevPageHandle}>&#10094;</button>
      <span className="page-count">{ `${currentPage} of ${pagesCount}` }</span>
      <button className="page-btn" type="button" onClick={() => nextPageHandle(pagesCount)}>&#10095;</button>
      <p className="ads-count-text">
        total ads count:
        <span className="ads-count">
          {adsCount}
        </span>
      </p>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: propTypes.number.isRequired,
  adsCount: propTypes.number.isRequired,
  nextPageHandle: propTypes.func.isRequired,
  prevPageHandle: propTypes.func.isRequired,
};

export default Pagination;
