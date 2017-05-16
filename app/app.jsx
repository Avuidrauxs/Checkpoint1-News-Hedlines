import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import NewsHome from './components/NewsHome';
import Main from './components/Main';
import Login from './components/Login';
import NotFoundPage from './components/NotFoundPage';
import configureStore from './store/configureStore';


const store = configureStore();

// Load foundation
$(document).foundation();


store.subscribe(() => {
  //console.log('New state', store.getState());
})

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
    <Route path="/" component={Main} >
      <Route path="news_home" component={NewsHome} />
      <Route path="*" component={NotFoundPage} />
      <IndexRoute component={Login} />
    </Route>
  </Router>
  </Provider>,
  document.getElementById('app')
);
