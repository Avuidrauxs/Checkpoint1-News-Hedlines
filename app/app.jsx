import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { NewsHome } from './components/NewsHome';
import Main from './components/Main';
import Login from './components/Login';
import NotFound from './components/NotFound';
// App css
import './styles/app.scss';

/**
 * Check if the user is logged in
 * @param {string} nextState the next state to load
 * @param {string} replace the page to replace
 * @return {null} returns nothing
 */
const requireAuth = (nextState, replace) => {
  if (!localStorage.getItem('profile')) {
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
      <Route path="*" component={NotFound} />
      <IndexRoute component={Login} />
    </Route>
  </Router>,
  document.getElementById('app')
);
