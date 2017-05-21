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
  children: PropTypes.func
};
Main.defaultProps = {
  children: {}
};

export default Main;
