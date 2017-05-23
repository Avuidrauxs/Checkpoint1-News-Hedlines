import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';

/**
 *Listens and stores data from the action according to their action type
 *
 * @class ArticleStore
 * @extends {EventEmitter}
 */
class ArticlesStore extends EventEmitter {
  /**
   * ArticleStore constructor
   * @return {null} - returns no value
   */
  constructor() {
    super();
    this.articles = [];
    this.articleTitle = '';
    this.getAllNewsArticles = this.getAllNewsArticles.bind(this);
  }

/**
 * this method just sets ths articles store with articles
 * @memberof ArticlesStore
 * @return {array} - returns an array of articles
 */
  getAllNewsArticles() {
    return { articles: this.articles, articleSource: this.articleTitle };
  }
  /**
   * This function listens for payLoad from the action and stores them
   * according to their action type.
   * @param {object} action
   *@return {null} - returns no value
   * @memberof ArticlesStore
   */
  handleActions(action) {
    switch (action.type) {
      case 'FETCH_ALL_ARTICLES':
        this.articles = action.articles.articleList;
        this.articleTitle = action.articles.articleSource;
        this.emit('change');
        break;
      default:
    }
  }

}

const articlesStore = new ArticlesStore();
Dispatcher.register(articlesStore.handleActions.bind(articlesStore));

export default articlesStore;
