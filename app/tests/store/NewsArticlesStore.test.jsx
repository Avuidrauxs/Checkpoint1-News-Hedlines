import expects from 'expect';
import Dispatcher from '../../dispatcher';

import NewsArticlesStore from '../../store/NewsArticlesStore';


const articless = [];
const articleSource = '';

describe('NewsArticlesStore', () => {
  it('should exist', () => {
    expects(NewsArticlesStore).toExist();
  });
  it('should return an empty array when instance is created', () => {
    expect(NewsArticlesStore.articles).toHaveLength(0);
  });
  it('method "getAllNewsArticles" should populate sources array with articles', () => {
    expect(NewsArticlesStore.getAllNewsArticles).toBeInstanceOf(Function);
    NewsArticlesStore.getAllNewsArticles();
    expect(NewsArticlesStore.articles).toEqual(articless);
  });
  it('should respond to a dispatch call', () => {
    Dispatcher.dispatch({
      type: 'FETCH_ALL_ARTICLES',
      articles: {
        articleList: articless,
        articleSource,
      }
    });
    expect(NewsArticlesStore.articles).toBe(articless);
    expect(NewsArticlesStore.articleSource).toBe(articleSource);
  });
});
