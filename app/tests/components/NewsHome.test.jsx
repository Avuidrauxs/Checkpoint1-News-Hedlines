import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';

import NewsHome from '../../components/NewsHome';
import HeadlineList from '../../components/HeadlineList';

describe('News Home', () => {
  it('should exist', () => {
    expect(NewsHome).toExist();
  });
  it('should render Healine sources list', () => {
    const store = configureStore();
    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <NewsHome />
      </Provider>,
    );
    const newsHome = TestUtils.scryRenderedComponentsWithType(provider, NewsHome)[0];
    const headlineList = TestUtils.scryRenderedComponentsWithType(provider, HeadlineList);

    expect(headlineList.length).toEqual(1);
  });
});
