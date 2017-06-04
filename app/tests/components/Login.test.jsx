import React from 'react';
import ReactDOM from 'react-dom';
import expects from 'expect';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import createHistory from 'history/createBrowserHistory';
import localStorage from '../__mock__/localStorageMock'

import Login from '../../components/Login';

describe('Login', () => {
  it('should exist', () => {
    expects(Login).toExist();
  });
  it('renders without crashing', () => {
       const wrapper = shallow(<Login/>);
   });
   it('should access login method',() => {
     const response = {profileObj: {
       givenName: 'audax',
       email: 'audax@fap.com'
     }
  }
     const login = new Login();
     expect(login.saveGoogleCredentials).toBeInstanceOf(Function);
   });
});
