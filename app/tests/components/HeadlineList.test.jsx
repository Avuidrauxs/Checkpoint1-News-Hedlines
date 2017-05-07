import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import HeadlineList from '../../components/HeadlineList';
import HeadlineItem from '../../components/HeadlineItem';

describe('Headlines List', ()=>{
  it('shoild exist', ()=>{
    expect(HeadlineList).toExist();
  });
  it('should render one or more Headline components for each news source',()=>{
    const sources = [{
      id: 1,
      name: 'CNN',
      description: 'ISIS are here finally',
      url: '#'},
      {
      id: 2,
      name: 'IGN',
      description: 'No man sky is freaking scam',
      url:'#'
    }];

    const headlineList = TestUtils.renderIntoDocument(<HeadlineList sources={sources}/>);
    const headlineComponents = TestUtils.scryRenderedComponentsWithType(headlineList,HeadlineItem);

    expect(headlineComponents.length).toBe(sources.length);
  })
});
