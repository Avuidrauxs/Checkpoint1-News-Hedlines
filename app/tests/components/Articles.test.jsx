import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';


import Articles from '../../components/Articles';

describe('Articles', () => {
  it('should exist', () => {
    expect(Articles).toExist();
  });
});
