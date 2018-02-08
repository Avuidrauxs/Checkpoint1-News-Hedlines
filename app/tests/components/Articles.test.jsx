import React from 'react';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import expects from 'expect';


import Articles from '../../components/Articles';
const articles = {
  title: 'Bad News App recieves good feedback',
  description: 'Blah blah blah blah blah',
  url: 'bad-news-app.heroku.com',
  urlToImage: 'pup.png',
  author: 'Audax',
  like: 'button-like',
};
const event = {
  target: {
    id: 'banana'
  }
};
describe('Articles', () => {
  it('should exist', () => {
    expects(Articles).toExist();
  });
  it('renders without crashing', () => {
    shallow(<Articles
      title={articles.title} description={articles.description}
      url={articles.url} urlToImage={articles.author} author={articles.author}
      publishedAt={articles.publishedAt} like={articles.like}
    />);
  });
  it('should render a snapshot', () => {
    const tree = renderer.create(<Articles
      title={articles.title} description={articles.description}
      url={articles.url} urlToImage={articles.author} author={articles.author}
      publishedAt={articles.publishedAt} like={articles.like}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should be able to access saveFavourites method when called', () => {
    const spy = sinon.stub(Articles.prototype, 'saveFavourites');
    const wrapper = mount(<Articles
      title={articles.title} description={articles.description}
      url={articles.url} urlToImage={articles.author} author={articles.author}
      publishedAt={articles.publishedAt} like={articles.like}
    />);
    wrapper.instance().saveFavourites(event);
    expect(spy.calledOnce).toBe(true);
  });
});
