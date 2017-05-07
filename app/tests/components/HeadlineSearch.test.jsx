import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import HeadlineSearch from '../../components/HeadlineSearch';

describe('Headline Search',()=>{
  it('should exist',()=>{
    expect(HeadlineSearch).toExist();
  });
  it('should call onSearch with entered input text',()=>{
    const searchText = 'AlJazeera';
    const spy = expect.createSpy();
    const headlineSearch = TestUtils.renderIntoDocument(<HeadlineSearch onSearch={spy}/>);

    headlineSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(headlineSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false,'AlJazeera');
  });
  it('should call Onsearch with the proper checked value',()=>{
    const spy = expect.createSpy();
    const headlineSearch = TestUtils.renderIntoDocument(<HeadlineSearch onSearch={spy}/>);

    headlineSearch.refs.showWorldNews.checked = true;
    TestUtils.Simulate.change(headlineSearch.refs.showWorldNews);

    expect(spy).toHaveBeenCalledWith(true,'');
  });
});
