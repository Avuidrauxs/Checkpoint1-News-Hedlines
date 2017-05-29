import React from 'react';
import PropTypes from 'prop-types';


const Main = props => (
  <div>
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
