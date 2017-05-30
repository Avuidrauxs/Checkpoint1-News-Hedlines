import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';
import expect from 'expect';


import Articles from '../../components/Articles';
const articles ={
  title: 'Bad News App recieves good feedback',
  description: 'Blah blah blah blah blah',
  url: 'bad-news-app.heroku.com',
  urlToImage: 'pup.png',
  author: 'Audax',
  publishedAt: '2017-9-1',
}
describe('Articles', () => {
  it('should exist', () => {
    expect(Articles).toExist();
  });
  // it('renders without crashing', () => {
  //      const div = document.createElement('div');
  //      ReactDOM.render(<Articles title={articles.title} description={articles.description}
  //        url={articles.url} urlToImage={articles.author} author={articles.author}
  //        publishedAt={articles.publishedAt}/>, div);
  //  });
  it('renders without crashing', () => {
       const div = shallow(<Articles title={articles.title} description={articles.description}
         url={articles.url} urlToImage={articles.author} author={articles.author}
         publishedAt={articles.publishedAt}/>)

   });

});
