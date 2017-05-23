import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';


import Login from '../../components/NewsHome';

describe('Login', () => {
  it('should exist', () => {
    expect(Login).toExist();
  });
  it('renders without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<Login/>, div);
   });
});
