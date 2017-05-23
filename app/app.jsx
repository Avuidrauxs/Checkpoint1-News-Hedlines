import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { NewsHome } from './components/NewsHome';
import Main from './components/Main';
import Login from './components/Login';
import NotFoundPage from './components/NotFoundPage';
// App css
import './styles/app.scss';

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
