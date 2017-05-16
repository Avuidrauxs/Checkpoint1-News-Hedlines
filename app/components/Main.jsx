import React from 'react';
import Nav from './Nav';


var Main = (props) => {
  return (
    <div>
      <Nav/>
      <br/>
      <br/>
      {props.children}

    </div>
  );
}

module.exports = Main;
