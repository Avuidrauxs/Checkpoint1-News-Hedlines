import expect from 'expect';
import { setSearchText, fetchArticles, getAllNews } from 'actions';


describe('Actions',()=>{
  it('should generate search text action',()=>{
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Im a banana'
    };
    const res = setSearchText(action.searchText);
    expect(res).toEqual(action);
  });
  it('should fetch articles when source is entered',()=>{
    const action = {
      type:'FETCH_ARTICLES',
      source: 'cnn'
    };
    const res = fetchArticles(action.source);
    expect(res).toEqual(action);
  });
  it('should fetch all the news sources',()=>{
    const action = {type:"GET_ALL_NEWS"}
    const res = getAllNews();

    expect(res).toEqual(action);
  })
})
