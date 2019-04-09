import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import AdPopup from '../components/adPopup';
import { changeAdPopupStatus } from '../actions/adPopup';

class adPopup extends PureComponent {
  closeBtnHandler = () => {
    const { changeAdPopupShowStatus } = this.props;
    changeAdPopupShowStatus();
  }

  render() {
    const {
      ad,
      show,
      loading,
    } = this.props;
    if (loading) {
      return (<div>loading...</div>);
    }
    if (show) {
      return (<AdPopup ad={ad} closeBtnHandler={this.closeBtnHandler} />);
    }
    return (null);
  }
}

const mapDispatchToProps = dispatch => ({
  changeAdPopupShowStatus: () => dispatch(changeAdPopupStatus()),
});

const mapStateToProps = state => ({
  ad: state.adPopup.ad,
  loading: state.adPopup.loading,
  show: state.adPopup.showPopup,
});

adPopup.propTypes = {
  ad: propTypes.instanceOf(Object).isRequired,
  loading: propTypes.bool.isRequired,
  show: propTypes.bool.isRequired,
  changeAdPopupShowStatus: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(adPopup);
