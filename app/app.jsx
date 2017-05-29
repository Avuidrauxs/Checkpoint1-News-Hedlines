import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { NewsHome } from './components/NewsHome';
import Main from './components/Main';
import Login from './components/Login';
import NotFoundPage from './components/NotFoundPage';
// App css
import './styles/app.scss';

/**
 * Check if the user is logged in
 * @param {string} nextState the next state to load
 * @param {string} replace the page to replace
 * @return {boolean} the login status
 */
const requireAuth = (nextState, replace) => {
  if (!global.window.localStorage.getItem('profile')) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    });
  }
};

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main} >
      <Route path="news_home" component={NewsHome} onEnter={requireAuth} />
      <Route path="*" component={NotFoundPage} />
      <IndexRoute component={Login} />
    </Route>
  </Router>,
  document.getElementById('app')
);
