import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Layout from './components/Layout.jsx';
import ManageUsers from './components/pages/ManageUsers';
import ManageProfile from './components/pages/ManageProfile.jsx';

import reducers from './components/reducers';
const defaultState = {};
const store = createStore(reducers);

const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={ManageUsers} title="Users"></IndexRoute>
        <Route path="profile" component={ManageProfile} title="Profile"></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
