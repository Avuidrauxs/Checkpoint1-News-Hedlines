import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { shallow } from 'enzyme';


import Nav from '../../components/Nav';

describe('Nav', () => {
  it('should exist', () => {
    expect(Nav).toExist();
  });
  it('renders without crashing', () => {
    const userProfile = {
      googleId: "106092711356966952734",
      imageUrl: "https://lh6.googleusercontent.com/-V-2u0o-CEFI/AAAAAAAAAAI/AAAAAAAABHo/QQ-SVzoEiag/s96-c/photo.jpg",
      email: "audax338@gmail.com",
      name: "Audax Anchirinah",
      givenName: "Audax"
    };
    localStorage.setItem('profile', JSON.stringify(userProfile));
       const div = shallow(<Nav/>);
   });
});
