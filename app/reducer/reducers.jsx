export const searchTextReducer = (state = '',action)=>{
  switch(action.type){
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
}

export const getAllNewsReducer = (state=[],action)=>{
  switch(action.type){
    case 'GET_ALL_NEWS':
      return action.sources;
    default:
      return state;
  }
}

export const fetchArticlesReducer = (state=[],action)=>{
  switch (action.type) {
    case 'FETCH_ARTICLES':
      return action.articles

    default:
      return state;

  }
}
