import { combineReducers } from 'redux';
import ads from './ads';
import filter from './filter';

const reducers = combineReducers({
  entities: ads,
  filter,
});

export default reducers;
