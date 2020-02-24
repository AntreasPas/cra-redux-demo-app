import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './configure-store';

import { fetchGrads } from './api';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App grads={fetchGrads()} />
  </Provider>,
  document.getElementById('root')
);
