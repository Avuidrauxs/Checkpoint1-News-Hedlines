import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';


const Main = props => (
  <div>
    <Nav />
    <br />
    <br />
    {props.children}

  </div>
  );

Main.propTypes = {
  children: PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]).isRequired
};


export default Main;
