import {combineReducers} from 'redux';
import AdsReducer from './AdsReducer';

const reducers = combineReducers ({
    ads: AdsReducer
});

export default reducers;