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
      articles: [{
        name: 'CNN',
        id: 2
      }]
    };
    const res = fetchArticles(action.articles);
    expect(res).toEqual(action);
  });
  it('should fetch all the news sources',()=>{
    const action = {
      type:"GET_ALL_NEWS",
      sources:[]
    }
    const res = getAllNews();

    expect(res.type).toEqual(action.type);
  })
})
