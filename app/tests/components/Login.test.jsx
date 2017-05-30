import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { shallow } from 'enzyme'


import Login from '../../components/Login';

describe('Login', () => {
  it('should exist', () => {
    expect(Login).toExist();
  });
  it('renders without crashing', () => {
       const wrapper = shallow(<Login/>);
   });
});
