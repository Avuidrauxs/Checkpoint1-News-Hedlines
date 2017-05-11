export const setSearchText = (searchText)=>{
    return  {
      type:'SET_SEARCH_TEXT',
      searchText
    }
}

export const fetchArticles = (source)=>{
  return {
    type: 'FETCH_ARTICLES',
    source
  }
}

export const getAllNews = ()=>{
  return {
    type:'GET_ALL_NEWS',
  }
}
