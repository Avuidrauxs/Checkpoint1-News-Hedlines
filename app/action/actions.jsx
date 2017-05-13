import axios from 'axios';

export const setSearchText = (searchText)=>{
    return  {
      type:'SET_SEARCH_TEXT',
      searchText
    }
}

export const fetchArticles = (articles)=>{
  return {
    type: 'FETCH_ARTICLES',
    articles
  }
}

export const getAllNews = (sources)=>{
  return {
    type:'GET_ALL_NEWS',
    sources
  }
}

const NEWS_API_URL = 'https://newsapi.org/v1/sources?apiKey=213327409d384371851777e7c7f78dfe';
const NEWS_API_URL_SOURCES = 'https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe&sortBy=top'
export const fetchNewsFinal = ()=>{
  return(dispatch)=>{

    const encodedCategory = encodeURIComponent();
    const requestUrl = `${NEWS_API_URL}` //&category=${encodedCategory}`;

    axios.get(requestUrl).then((res)=>{
      if(res.data.status === 'ok' && res.data.sources === []){
        throw new Error('Error no news');
      }else {
        dispatch(getAllNews(res.data.sources))
      }
    },(err)=>{
      throw new Error('Error no news')
    })

  }
}

export const fetchAllArticles = (category)=>{
  return(dispatch)=>{
  const encodedCategory = encodeURIComponent(category);
  const requestUrl = `${NEWS_API_URL_SOURCES}&source=${encodedCategory}`;

  axios.get(requestUrl).then((res)=>{
    if(res.data.status === 'ok' && res.data.articles === []){
      throw new Error('Error no news');
    }else {
      //return res.data.articles;
      dispatch(fetchArticles(res.data.articles))
    }
  },(err)=>{
    throw new Error('Error no news')
  })
  }
}
