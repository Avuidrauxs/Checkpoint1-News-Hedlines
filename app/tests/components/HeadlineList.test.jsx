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
  // it('should render one or more Headline components for each news source', () => {
  //   const sources = [{
  //     id: 1,
  //     name: 'CNN',
  //     description: 'ISIS are here finally',
  //     url: '#'},
  //     {
  //     id: 2,
  //     name: 'IGN',
  //     description: 'No man sky is freaking scam',
  //     url:'#'
  //   }];
  //   const store = configureStore({
  //     sources
  //   });
  //
  //   const provider = TestUtils.renderIntoDocument(
  //     <Provider store={store}>
  //       <ConnectedHeadlineList/>
  //     </Provider>
  //   );
  //   const headlineList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedHeadlineList)[0];
  //   const headlineComponents = TestUtils.scryRenderedComponentsWithType(headlineList, ConnectedHeadlineItem);
  //
  //   expect(headlineComponents.length).toBe(sources.length);
  // })
});
