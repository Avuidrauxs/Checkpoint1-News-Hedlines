import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';


import NewsHome from '../../components/NewsHome';
import HeadlineList from '../../components/HeadlineList';

describe('News Home', () => {
  it('should exist', () => {
    expect(NewsHome).toExist();
  });
});
