import { combineReducers } from 'redux';
import ads from './ads';
import filter from './filter';
import adPopup from './adPopup';

const reducers = combineReducers({
  entities: ads,
  filter,
  adPopup,
});

export default reducers;
