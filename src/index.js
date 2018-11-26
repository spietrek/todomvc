import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import 'todomvc-app-css/index.css';
import configureStore from './store';

const store = configureStore(reducer);
const rootElement = window.document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);
