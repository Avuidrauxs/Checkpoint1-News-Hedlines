import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
const store = require('./store/configureStore').configureStore();
import NewsHome from './components/NewsHome';

// Load foundation
$(document).foundation();
store.subscribe(()=>{
  //console.log('New state', store.getState());
})

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <NewsHome/>
  </Provider>,
  document.getElementById('app')
);
