import React from 'react';
import ReactDOM from 'react-dom';
// App css
import 'style!css!sass!applicationStyles';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import NewsHome from './components/NewsHome';
import Main from './components/Main';
import Login from './components/Login';
import NotFoundPage from './components/NotFoundPage';


// Load foundation
$(document).foundation();


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main} >
      <Route path="news_home" component={NewsHome} />
      <Route path="*" component={NotFoundPage} />
      <IndexRoute component={Login} />
    </Route>
  </Router>,
  document.getElementById('app')
);
