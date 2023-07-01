import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Details from './Details';

ReactDOM.render(
  <Provider store={store}>
    <Details />
  </Provider>,
  document.getElementById('root')
);
