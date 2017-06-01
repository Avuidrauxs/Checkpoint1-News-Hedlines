import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';


import Main from '../../components/Main';

describe('Main', ()=>{
  it('should exist', ()=>{
    expect(Main).toExist();
  });
  it('renders without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<Main/>, div);
   });
});
