import { createStore, applyMiddleware } from 'redux';
import Reducers from './reducers/Reducers';
import {fetchAllAds} from './actions/Actions';
import thunk from 'redux-thunk';

const store = createStore(Reducers, applyMiddleware(thunk));

store.dispatch(fetchAllAds());

export default store;