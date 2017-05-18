import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';


import HeadlineSearch from '../../components/HeadlineSearch';
import NewsHome from '../../components/NewsHome';

describe('Headline Search',()=>{
  const newsSources = [{
      "id": "cnn",
      "name": "CNN",
      "description": "View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN",
      "url": "http://us.cnn.com"
    },
    {
      "id": "daily-mail",
      "name": "Daily Mail",
      "description": "All the latest news, sport, showbiz, science and health stories from around the world from the Daily Mail and Mail on Sunday newspapers.",
      "url": "http://www.dailymail.co.uk/home/index.html"
    },
    {
      "id": "der-tagesspiegel",
      "name": "Der Tagesspiegel",
      "description": "Nachrichten, News und neueste Meldungen aus dem Inland und dem Ausland - aktuell präsentiert von tagesspiegel.de.",
      "url": "http://www.tagesspiegel.de"
    }];
  it('should exist',()=>{
    expect(HeadlineSearch).toExist();
  });
  // it('should call onSearch with entered input text',()=>{
  //   const searchText = 'AlJazeera';
  //   const spy = expect.createSpy();
  //   const headlineSearch = TestUtils.renderIntoDocument(<HeadlineSearch onSearch={spy}/>);
  //
  //   headlineSearch.refs.searchText.value = searchText;
  //   TestUtils.Simulate.change(headlineSearch.refs.searchText);
  //
  //   expect(spy).toHaveBeenCalledWith(false, 'AlJazeera');
  // });
  // it('should call Onsearch with the proper checked value', () => {
  //   const spy = expect.createSpy();
  //   const headlineSearch = TestUtils.renderIntoDocument(<HeadlineSearch onSearch={spy} />);
  //
  //
  //   TestUtils.Simulate.change(headlineSearch.refs.showWorldNews);
  //
  //   expect(spy).toHaveBeenCalledWith('');
  // });
  // it('should filter Headlines by search text', () => {
  //   //DO THIS LATER
  //   // const filteredSearch = NewsHome.filteredSearch(newsSources,true,'ign');
  //   // expect(filteredSearch.length).toBe(1);
  //
  // });
  // it('should return all headlines when search feild is empty', () => {
  //
  // });
});
