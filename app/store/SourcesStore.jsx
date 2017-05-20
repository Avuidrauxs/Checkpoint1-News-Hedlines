import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';

class SourcesStore extends EventEmitter {
  constructor() {
    super()
    this.sources = [];
    this.getAllNewsSources = this.getAllNewsSources.bind(this);
  }


  getAllNewsSources(){
    return this.sources;
  }
  handleActions(action) {
    switch (action.type){
      case 'FETCH_ALL_NEWS':
        this.sources = action.sources;
        this.emit('change');
        break;
      default:
    }
  }

}

const sourcesStore = new SourcesStore();
Dispatcher.register(sourcesStore.handleActions.bind(sourcesStore));
window.sourcesStore = SourcesStore;
window.dispatcher = Dispatcher;

export default sourcesStore;
