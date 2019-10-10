import { combineReducers } from 'redux';
import ads from './ads';
import filter from './filter';
import adPopup from './adPopup';
import pagination from './pagination';

const reducers = combineReducers({
  entities: ads,
  filter,
  adPopup,
  pagination,
});

export default reducers;
