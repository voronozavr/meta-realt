import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import entityProps from '../propTypes';
import Pagination from '../components/pagination';
import {
  pageIncrement,
  pageDecrease,
} from '../actions/ads';

class pagination extends PureComponent {
  nextPageHandle = (pageCount) => {
    const { nextPage, currentPage } = this.props;
    nextPage(currentPage, pageCount);
  }

  prevPageHandle = () => {
    const { prevPage, currentPage } = this.props;
    prevPage(currentPage);
  }

  render() {
    const {
      ads,
      adsCount,
      currentPage,
    } = this.props;
    return (
      ads.length ? <Pagination
        currentPage={currentPage}
        adsCount={adsCount}
        nextPageHandle={this.nextPageHandle}
        prevPageHandle={this.prevPageHandle}
      /> : <div />
    );
  }
}

const mapStateToProps = state => ({
  ads: state.entities.ads,
  adsCount: state.entities.adsCount,
  currentPage: state.entities.currentPage,
});

const mapDispatchToProps = dispatch => ({
  nextPage: (currentPage, lastPage) => dispatch(pageIncrement(currentPage, lastPage)),
  prevPage: currentPage => dispatch(pageDecrease(currentPage)),
});

pagination.propTypes = {
  ads: entityProps.ads.isRequired,
  adsCount: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  nextPage: propTypes.func.isRequired,
  prevPage: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(pagination);
