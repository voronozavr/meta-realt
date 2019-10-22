import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import entityProps from '../propTypes';
import AdPopup from '../components/adPopup';
import { changeAdPopupStatus } from '../actions/adPopup';

class adPopup extends PureComponent {
  componentDidUpdate() {
    const { show } = this.props;
    if (show) {
      document.body.style.overflowY = 'scroll';
      document.body.style.position = 'fixed';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
    }
  }

  closeBtnHandler = () => {
    const { changeAdPopupShowStatus } = this.props;
    changeAdPopupShowStatus();
  }

  render() {
    const {
      ad,
      pics,
      show,
      loading,
    } = this.props;
    if (loading) {
      return (<div>loading...</div>);
    }
    if (show) {
      return (<AdPopup ad={ad} pics={pics} closeBtnHandler={this.closeBtnHandler} />);
    }
    return (null);
  }
}

const mapDispatchToProps = dispatch => ({
  changeAdPopupShowStatus: () => dispatch(changeAdPopupStatus()),
});

const mapStateToProps = state => ({
  ad: state.adPopup.ad,
  pics: state.adPopup.pics,
  loading: state.adPopup.loading,
  show: state.adPopup.showPopup,
});

adPopup.propTypes = {
  ad: entityProps.ad.isRequired,
  pics: entityProps.pics.isRequired,
  loading: propTypes.bool.isRequired,
  show: propTypes.bool.isRequired,
  changeAdPopupShowStatus: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(adPopup);
