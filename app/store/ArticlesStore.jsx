import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';

class ArticlesStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
    this.getAllNewsArticles = this.getAllNewsArticles.bind(this);
  }


  getAllNewsArticles(){
    return this.articles;
  }
  handleActions(action) {
    switch (action.type){
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
window.articlesStore = ArticlesStore;
window.dispatcher = Dispatcher;

export default articlesStore;
