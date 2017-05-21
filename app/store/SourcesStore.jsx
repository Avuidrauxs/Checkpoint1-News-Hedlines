import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';

/**
 *Listens and stores data from the action according to their action type
 *
 * @class SourcesStore
 * @extends {EventEmitter}
 */
class SourcesStore extends EventEmitter {
  /**
   * SourcesStore constructor
   * @return {null} - returns no value
   */
  constructor() {
    super();
    this.sources = [];
    this.getAllNewsSources = this.getAllNewsSources.bind(this);
  }
  /**
   * this method just sets ths sources store with sources
   * @memberof SourcesStore
   * @return {array} - returns an array of news sources
   */
  getAllNewsSources() {
    return this.sources;
  }
  /**
   * This function listens for payLoad from the action and stores them
   * according to their action type.
   * @param {object} action
   *@return {null} - returns no value
   * @memberof SourcesStore
   */
  handleActions(action) {
    switch (action.type) {
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

export default sourcesStore;
