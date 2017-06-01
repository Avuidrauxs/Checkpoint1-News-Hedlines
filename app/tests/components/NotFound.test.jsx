import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';


import NotFound from '../../components/NotFound';

describe('NotFound', ()=>{
  it('should exist', ()=>{
    expect(NotFound).toExist();
  });
  it('renders without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<NotFound/>, div);
   });
});
