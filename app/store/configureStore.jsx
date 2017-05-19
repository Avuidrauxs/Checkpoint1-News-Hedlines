import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { searchTextReducer, getAllNewsReducer, fetchArticlesReducer, googleSignInReducer } from 'reducers';

const thunk = require('redux-thunk').default;

const configureStore = (initialState = {}) => {
  const reducer = combineReducers({
    searchText: searchTextReducer,
    getAllNews: getAllNewsReducer,
    fetchArticles: fetchArticlesReducer,
    googleSignIn: googleSignInReducer,
  });

  const store = createStore(reducer,
    initialState,
  compose(applyMiddleware(thunk),
    window.devToolsExtension
  ? window.devToolsExtension()
  : f => f));

  return store;
};

export default configureStore;
