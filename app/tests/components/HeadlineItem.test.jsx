import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';


import HeadlineItem from '../../components/HeadlineItem';

describe('Headline Item', () => {
  it('should exist', () => {
    expect(HeadlineItem).toExist();
  });
  it('renders without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<HeadlineItem/>, div);
   });
});
