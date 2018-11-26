import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';

const middlewares = [thunk];

const configureStoreProd = () => createStore(rootReducers, applyMiddleware(...middlewares));

const configureStoreDev = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
  return createStore(rootReducers, composeEnhancers(applyMiddleware(...middlewares)));
};

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
