import expects from 'expect';
import Dispatcher from '../../dispatcher';

import { fetchAllArticles, fetchAllNewsSources } from '../../action/NewsActions';

describe('News Actions', () => {
  it('fetch all news sources function should exist', () => {
    expects(fetchAllNewsSources).toExist();
  });
  it('fetch all articles function should exist', () => {
    expects(fetchAllArticles).toExist();
  });
  it('should have a function that fetches news sources, "fetchAllNewsSources" ',
    ()=> {
      expect(fetchAllNewsSources).toBeInstanceOf(Function);
    });
  it('should fetch all new sources from external source and dispatch to store',
    () => {
      fetchAllNewsSources().then((res) => {
        const dispatchCall = spyDispatcher.mock.calls[0][0];
        expect(spyDispatcher).toHaveBeenCalled();
        expect(dispatchCall.type).toEqual('FETCH_ALL_NEWS');
        expect(dispatchCall.sources).toBeInstanceOf(Array);
      },
      (err) => {
        expect(err).toEqual(new Error('Error no news'));
      }
    );
  });
  it('should have a function that fetches articles for a news source',
    ()=> {
      expect(fetchAllArticles).toBeInstanceOf(Function);
    });
  it('should fetch all artticles from external source  and dispatch to store',
    () => {
      fetchAllArticles().then((res) => {
        const dispatchCall = spyDispatcher.mock.calls[0][0];
        expect(spyDispatcher).toHaveBeenCalled();
        expect(dispatchCall.type).toEqual('FETCH_ALL_ARTICLES');
        expect(dispatchCall.articles).toBeInstanceOf(Object);
      },
      (err) => {
        expect(err).toEqual(new Error('Error no news'));
      }
    );
});

});
