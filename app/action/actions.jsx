import axios from 'axios';

export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export const fetchArticles = (articles) => {
  return {
    type: 'FETCH_ARTICLES',
    articles
  };
};

export const getAllNews = (sources) => {
  return {
    type: 'GET_ALL_NEWS',
    sources
  };
};

export const getLoggedIn = (user) => {
  return {
    type: 'LOGIN',
    user
  };
};

export const getLoggedOut = () => {
  return {
    type: 'LOGOUT'
  };
};

const NEWS_API_URL =
  'https://newsapi.org/v1/sources?apiKey=213327409d384371851777e7c7f78dfe';
const NEWS_API_URL_SOURCES =
  'https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe';
export const fetchNewsFinal = () => {
  return (dispatch) => {
    const requestUrl = `${NEWS_API_URL}`;

    axios.get(requestUrl).then(
      (res) => {
        if (res.data.status === 'ok' && res.data.sources === []) {
          throw new Error('Error no news');
        } else {
          dispatch(getAllNews(res.data.sources));
        }
      },
      (err) => {
        throw new Error('Error no news', err);
      }
    );
  };
};

export const fetchAllArticles = (category, sort = false) => {
  return (dispatch) => {
    const encodedCategory = encodeURIComponent(category);
    const requestUrl = `${NEWS_API_URL_SOURCES}&source=${encodedCategory}`;
    const requestUrlLatest = `${NEWS_API_URL_SOURCES}&source=${encodedCategory}&sortBy=latest`;
    if(!sort){
    axios.get(requestUrl).then(
      (res) => {
        if (res.data.status === 'ok' && res.data.articles === []) {
          throw new Error('Error no news');
        } else {
          dispatch(fetchArticles(res.data.articles));
        }
      },
      (err) => {
        throw new Error('Error no news', err);
      }
    );
  } else {
    //alert('You will get latest soon');
    axios.get(requestUrlLatest).then(
      (res) => {
        if (res.data.status === 'ok' && res.data.articles === []) {
          throw new Error('Error no news');
        } else {
          dispatch(fetchArticles(res.data.articles));
          console.log('I entered here too');
        }
      },
      (err) => {
        throw new Error('Error no news', err);
      }
    );
  }


    ////
  };
};

export const googleSignIn = (credentials) => {
  return (dispatch) => {
    sessionStorage.setItem('userProfile', credentials);
    console.log('Im inside');
    dispatch(getLoggedIn(credentials));
  }
}

export const googleSignOut = () => {
  return (dispatch) => {
    sessionStorage.clear();
    dispatch(getLoggedOut());
  };
};
