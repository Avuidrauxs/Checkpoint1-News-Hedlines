import expect from 'expect';
import { searchTextReducer } from 'reducers';
import df from 'deep-freeze-strict';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search text', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'banana',
      };
      const res = searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });
});
