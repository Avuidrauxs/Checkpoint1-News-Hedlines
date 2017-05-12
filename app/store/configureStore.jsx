import {createStore, compose, combineReducers,applyMiddleware} from 'redux';
const thunk = require ('redux-thunk').default;
import {searchTextReducer,getAllNewsReducer,fetchArticlesReducer} from 'reducers';

export const configureStore =()=>{
  const reducer = combineReducers({
    searchText: searchTextReducer,
    getAllNews: getAllNewsReducer,
    fetchArticles: fetchArticlesReducer
    });

  const store = createStore(reducer,
  compose(applyMiddleware(thunk),
    window.devToolsExtension
  ? window.devToolsExtension()
  : f => f));

  return store;
}
