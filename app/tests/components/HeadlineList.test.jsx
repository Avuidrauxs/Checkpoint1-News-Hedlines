import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';


import HeadlineList from '../../components/HeadlineList';
import HeadlineItem from '../../components/HeadlineItem';

describe('Headlines List', () => {
  it('should exist', () => {
    expect(HeadlineList).toExist();
  });
  it('renders without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<HeadlineList/>, div);
   });
  
});
