import propTypes from 'prop-types';
import ad from './ad';
import pic from './pic';
import locality from './locality';
import region from './region';

export default {
  ad,
  ads: propTypes.arrayOf(ad),
  pic,
  pics: propTypes.arrayOf(pic),
  locality,
  localities: propTypes.arrayOf(locality),
  region,
  regions: propTypes.arrayOf(region),
};
