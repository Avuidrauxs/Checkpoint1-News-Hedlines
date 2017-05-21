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
    this.getAllNewsArticles = this.getAllNewsArticles.bind(this);
  }

/**
 * this method just sets ths articles store with articles
 * @memberof ArticlesStore
 * @return {null} - returns no value
 */
  getAllNewsArticles() {
    return this.articles;
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
        this.articles = action.articles;
        this.emit('change');
        break;
      default:
    }
  }

}

const articlesStore = new ArticlesStore();
Dispatcher.register(articlesStore.handleActions.bind(articlesStore));

export default articlesStore;
