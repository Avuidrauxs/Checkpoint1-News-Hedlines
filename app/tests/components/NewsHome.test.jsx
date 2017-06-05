import React from 'react';
import renderer from 'react-test-renderer';
import expects from 'expect';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import SourcesStore from '../../store/SourcesStore';
import ArticlesStore from '../../store/NewsArticlesStore';


import { NewsHome } from '../../components/NewsHome';

const userProfile = {
  googleId: '106092711356966952734',
  imageUrl: 'https://lh6.googleusercontent.com/-V-2u0o-CEFI/AAAAAAAAAAI/AAAAAAAABHo/QQ-SVzoEiag/s96-c/photo.jpg',
  email: 'audax338@gmail.com',
  name: 'Audax Anchirinah',
  givenName: 'Audax'
};
localStorage.setItem('profile', JSON.stringify(userProfile));

describe('News Home', () => {
  it('should exist', () => {
    expects(NewsHome).toExist();
  });
  it('renders without crashing', () => {
    shallow(<NewsHome />);
  });
  it('should render a snapshot', () => {
    const tree = renderer.create(<NewsHome />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should call componentDidMount once NewsHome is mounted', () => {
    const spy = sinon.spy(NewsHome.prototype, 'componentDidMount');
    mount(<NewsHome />);
    expect(spy.callCount).toBe(1);
  });
  it('should call componentWillUnmount once NewsHome is unmounted', () => {
    const spy = sinon.spy(NewsHome.prototype, 'componentWillUnmount');
    const wrapper = mount(<NewsHome />);
    wrapper.unmount();
    expect(spy.callCount).toBe(1);
  });
  it('should be able to access getArticles method when called', () => {
    const spy = sinon.spy(NewsHome.prototype, 'getArticles');
    const wrapper = mount(<NewsHome />);
    ArticlesStore.on = jest.fn(() => {
      wrapper.instance().getArticles();
    });
    wrapper.instance().componentDidMount();
    expect(spy.calledOnce).toBe(true);
  });
  it('should be able to access getSources method when called', () => {
    const spy = sinon.spy(NewsHome.prototype, 'getSources');
    const wrapper = mount(<NewsHome />);
    SourcesStore.on = jest.fn(() => {
      wrapper.instance().getSources();
    });
    wrapper.instance().componentDidMount();
    expect(spy.calledOnce).toBe(true);
  });
});
