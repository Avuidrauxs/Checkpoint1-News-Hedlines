import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';


import NewsHome from '../../components/NewsHome';
import HeadlineList from '../../components/HeadlineList';

describe('News Home', () => {
  it('should exist', () => {
    expect(NewsHome).toExist();
  });
  it('renders without crashing', () => {
      const news = {
        searchText: 'Here',
        altSources: [],
        altArticles: [],
        articleTitle: 'Select a news source to view articles'
      }
      const div = document.createElement('div');
      ReactDOM.render(<NewsHome/>, div);
   });
});
