import axios from 'axios';
import dispatcher from '../dispatcher';

/**
 * This function fetches all News Sources
 * @return {[type]} [description]
 */
export const fetchAllNewsSources = () => {
  const requestUrl = `${process.env.NEWS_API_URL}`;

  axios.get(requestUrl).then(
      (res) => {
        if (res.data.status === 'ok' && res.data.sources === []) {
          throw new Error('Error no news');
        } else {
          dispatcher.dispatch({ type: 'FETCH_ALL_NEWS', sources: res.data.sources });
        }
      },
      (err) => {
        throw new Error('Error no news', err);
      }
    );
};

/**
 * Fetches all the articles of the news source catergory selected
 * @param  {string}  newsSourcesID     [it is the catergory of the news source]
 * @param  {Boolean} [sort=false] [sort variable that checks for latest article headlines]
 * @return {[type]}               [description]
 */
export const fetchAllArticles = (newsSourcesID, sort = false) => {
  const encodednewsSourcesID = encodeURIComponent(newsSourcesID);
  if (!sort) {
    axios
    .get(`${process
      .env
      .NEWS_API_URL_SOURCES}&source=${encodednewsSourcesID}`)
    .then(
      (res) => {
        if (res.data.status === 'ok' && res.data.articles === []) {
          throw new Error('Error no news');
        } else {
          dispatcher.dispatch({
            type: 'FETCH_ALL_ARTICLES',
            articles: {
              articleList: res.data.articles,
              articleSource: res.data.source
            }
          });
        }
      },
      (err) => {
        throw new Error('Error no news', err);
      }
    );
  } else {
    axios
    .get(`${process
      .env
      .NEWS_API_URL_SOURCES}&source=${encodednewsSourcesID}&sortBy=latest`)
      .then(
      (res) => {
        if (res.data.status === 'ok' && res.data.articles === []) {
          throw new Error('Error no news');
        } else {
          dispatcher.dispatch({
            type: 'FETCH_ALL_ARTICLES',
            articles: {
              articleList: res.data.articles,
              articleSource: res.data.source
            }
          });
        }
      },
      (err) => {
        throw new Error('Error no news', err);
      }
    );
  }
};
