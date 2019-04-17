import propTypes from 'prop-types';

export default propTypes.shape({
  id: propTypes.string,
  address: propTypes.string,
  description: propTypes.string,
  price: propTypes.string,
  rooms: propTypes.number,
  square: propTypes.string,
  localityid: propTypes.string,
  regionid: propTypes.string,
  picid: propTypes.string,
  'pic.url': propTypes.string,
  createdAt: propTypes.string,
  updatedAt: propTypes.string,
});
