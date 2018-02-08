import React from 'react';
import renderer from 'react-test-renderer';
import expects from 'expect';
import sinon from 'sinon';
import { mount } from 'enzyme';


import Nav from '../../components/Nav';
const userProfile = {
  googleId: '106092711356966952734',
  imageUrl: 'https://lh6.googleusercontent.com/-V-2u0o-CEFI/AAAAAAAAAAI/AAAAAAAABHo/QQ-SVzoEiag/s96-c/photo.jpg',
  email: 'audax338@gmail.com',
  name: 'Audax Anchirinah',
  givenName: 'Audax'
};
localStorage.setItem('profile', JSON.stringify(userProfile));
describe('Nav', () => {
  it('should exist', () => {
    expects(Nav).toExist();
  });
  it('should render a snapshot', () => {
    const tree = renderer.create(<Nav />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should access class method "handleFavouriteBtn" in props', () => {
    const handleFavouriteBtn = jest.fn();
    const component = mount(<Nav onClick={handleFavouriteBtn} />);
    expect(component.props().onClick).toBe(handleFavouriteBtn);
  });
  it('should not call the handleFavouriteBtn Nav is mounted', () => {
    localStorage.setItem('profile', JSON.stringify(userProfile));
    const wrapper = mount(<Nav />);
    const spy = sinon.stub(Nav.prototype, 'handleFavouriteBtn');
    wrapper.instance().handleFavouriteBtn();
    expect(spy.callCount).toBe(0);
  });
});
