import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import HeadlineItem from '../../components/HeadlineItem';

describe('Headline', ()=>{
  it('shoild exist', ()=>{
    expect(HeadlineItem).toExist();
  })
})
