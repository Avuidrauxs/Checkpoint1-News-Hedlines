import expects from 'expect';
import Dispatcher from '../../dispatcher';

import SourcesStore from '../../store/SourcesStore';


const sources = [];


describe('SourcesStore', () => {
  it('should exist', () => {
    expects(SourcesStore).toExist();
  });
  it('should return an empty array when instance is created', () => {
    const source = SourcesStore.sources
    expect(source).toHaveLength(0);
  });
  it('method "getAllNewsSources" should populate sources array with news sources',() => {
    expect(SourcesStore.getAllNewsSources).toBeInstanceOf(Function);
    SourcesStore.getAllNewsSources();
    expect(SourcesStore.sources).toEqual(sources);
  });
  it('should respond to a dispatch call', () => {
    Dispatcher.dispatch({
    type: 'FETCH_ALL_NEWS',
    sources,
  });
  expect(SourcesStore.sources).toBe(sources);
  });
});
