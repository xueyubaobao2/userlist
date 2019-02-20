import {createStore, applyMiddleware,compose} from 'redux';
import reducers from '../reducers/index';
import thunk from 'redux-thunk';

// const store = createStore(reducers, applyMiddleware(thunk));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
export default store;
