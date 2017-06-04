import axios from 'axios';
import dispatcher from '../dispatcher';

/**
 * This function fetches all News Sources
 * @return {null}   - returns nothing
 */
export const fetchAllNewsSources = () => axios.get(process.env.NEWS_API_URL).then(
      (res) => {
        dispatcher.dispatch({
          type: 'FETCH_ALL_NEWS',
          sources: res.data.sources });
      },
      (err) => {
        throw new Error('Error no news', err);
      }
    );

/**
 * Fetches all the articles of the news source catergory selected
 * @param  {string}  newsSourcesID     [it is the catergory of the news source]
 * @param  {string} [sort]        [sort parameter to get article headlines]
 * @return {null}               - returns nothing
 */
export const fetchAllArticles = (newsSourcesID, sort) => {
  const encodedNewsSourcesID = encodeURIComponent(newsSourcesID);
  return axios
    .get(`${process
      .env
      .NEWS_API_URL_SOURCES}&source=${encodedNewsSourcesID}&sortBy=${sort}`)
    .then(
      (res) => {
        dispatcher.dispatch({
          type: 'FETCH_ALL_ARTICLES',
          articles: {
            articleList: res.data.articles,
            articleSource: res.data.source
          }
        });
      },
      (err) => {
        throw new Error('Error no news', err);
      }
    );
};
