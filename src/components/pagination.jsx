import React from 'react';
import propTypes from 'prop-types';
import '../scss/pagination.scss';

const component = ({
  currentPage,
  adsCount,
  nextPageHandle,
  prevPageHandle,
}) => {
  const pagesCount = Math.ceil(adsCount / 20);
  return (
    <div className="pagination">
      <button className="pageBtn" type="button" onClick={prevPageHandle}>&#10094;</button>
      <span className="pageCount">{ `${currentPage} of ${pagesCount}` }</span>
      <button className="pageBtn" type="button" onClick={() => nextPageHandle(pagesCount)}>&#10095;</button>
      <p className="adsCountText">
        total ads count:
        <span className="adsCount">
          {adsCount}
        </span>
      </p>
    </div>
  );
};

component.propTypes = {
  currentPage: propTypes.number.isRequired,
  adsCount: propTypes.number.isRequired,
  nextPageHandle: propTypes.func.isRequired,
  prevPageHandle: propTypes.func.isRequired,
};

export default component;
