import axios from 'axios';
import dispatcher from '../dispatcher';

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
          dispatcher.dispatch({ type: 'FETCH_ALL_ARTICLES', articles: res.data.articles });
        }
      },
      (err) => {
        throw new Error('Error no news', err);
      },
    );
  } else {
    // alert('You will get latest soon');
    axios.get(requestUrlLatest).then(
      (res) => {
        if (res.data.status === 'ok' && res.data.articles === []) {
          throw new Error('Error no news');
        } else {
          dispatcher.dispatch({ type: 'FETCH_ALL_ARTICLES', articles: res.data.articles });
        }
      },
      (err) => {
        alert('No latest news section');
        throw new Error('Error no news', err);
      },
    );
  }
}
