import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import NewsHome from '../../components/NewsHome';

describe('News Home', ()=>{
  it('shoild exist', ()=>{
    expect(NewsHome).toExist();
  })
})
