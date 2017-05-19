import React from 'react';
import Nav from './Nav';


const Main = props => (
  <div>
    <Nav />
    <br />
    <br />
    {props.children}

  </div>
  );

module.exports = Main;
