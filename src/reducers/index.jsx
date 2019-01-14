import { combineReducers } from 'redux';
import ads from './ads';

const reducers = combineReducers({
  entities: ads,
});

export default reducers;
