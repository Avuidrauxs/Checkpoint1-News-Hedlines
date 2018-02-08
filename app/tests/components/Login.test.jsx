import React from 'react';
import expects from 'expect';
import { shallow } from 'enzyme';


import Login from '../../components/Login';

describe('Login', () => {
  it('should exist', () => {
    expects(Login).toExist();
  });
  it('renders without crashing', () => {
    shallow(<Login />);
  });
  it('should access login method', () => {
    const login = new Login();
    expect(login.saveGoogleCredentials).toBeInstanceOf(Function);
  });
});
