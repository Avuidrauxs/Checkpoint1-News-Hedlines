import expects from 'expect';
//import axios from 'axios';
import Dispatcher from '../../dispatcher';

import { fetchAllArticles, fetchAllNewsSources } from '../../action/NewsActions';

// let spyDispatcher;
// beforeEach(()=>{
//   //jest.mock('axios');
//   spyDispatcher = jest.spyOn(Dispatcher,'dispatch');
// });
// afterEach(()=>{
//   spyDispatcher.mockReset();
// })
describe('News Actions', () => {
  it('fetch all news sources function should exist', () => {
    expects(fetchAllNewsSources).toExist();
  });
  it('fetch all articles function should exist', () => {
    expects(fetchAllArticles).toExist();
  });
  it('should fetch news sources', ()=> {
    expect(fetchAllNewsSources).toBeInstanceOf(Function);
  });
  it('should fetch all new sources from external source', () => {
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

  it('should throw an error if it is not getting news', () => {
    fetchAllNewsSources().then((res) => {

    },
    (err) => {
      expect(err).toEqual(new Error('Error no news'));
    }
  );
  });

  it('should fetch articles for a news source', ()=> {
    expect(fetchAllArticles).toBeInstanceOf(Function);
  });
  it('should fetch all artticles from external source',() => {
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

it('should throw an error if it is not getting articles', () => {
  fetchAllNewsSources().then((res) => {

  },
  (err) => {
    expect(err).toEqual(new Error('Error no news'));
  }
);
});

});
