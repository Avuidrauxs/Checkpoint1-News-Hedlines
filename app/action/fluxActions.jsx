import axios from 'axios';
import dispatcher from '../dispatcher';

/**
 * This function fetches all News Sources
 * @return {[type]} [description]
 */
export function fetchAllNewsSources() {
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
      },
    );
}

/**
 * Fetches all the articles of the news source catergory selected
 * @param  {string}  category     [it is the catergory of the news source]
 * @param  {Boolean} [sort=false] [sort variable that checks for latest article headlines]
 * @return {[type]}               [description]
 */
export function fetchAllArticles(category, sort = false) {
  const encodedCategory = encodeURIComponent(category);
  const requestUrl = `${process.env.NEWS_API_URL_SOURCES}&source=${encodedCategory}`;
  const requestUrlLatest = `${process.env.NEWS_API_URL_SOURCES}&source=${encodedCategory}&sortBy=latest`;
  if (!sort) {
    axios.get(requestUrl).then(
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
      },
    );
  } else {
    axios.get(requestUrlLatest).then(
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
      },
    );
  }
}
