import { createStore, applyMiddleware } from 'redux';
import compose from '../reducers';
import thunk from 'redux-thunk';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: 'Meta-realt',
}) : compose;

const store = createStore(composeEnhancers, applyMiddleware(thunk));

export default store;
