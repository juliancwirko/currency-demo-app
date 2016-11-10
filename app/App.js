import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';

/* eslint-disable */
import '!style!css!bootstrap/dist/css/bootstrap-flex.min.css';
/* eslint-disable */

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>
, document.getElementById('app'));
