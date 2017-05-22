import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';


import Nav from '../../components/Nav';

describe('Nav', () => {
  it('should exist', () => {
    expect(Nav).toExist();
  });
  it('renders without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<Nav/>, div);
   });
});
