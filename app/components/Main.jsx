import React from 'react';

/**
 * This method is a stateless React function that renders all the components
 * @param {object} props - contains parameters for component
 * @returns {React.Component} - returns a react component
 */
const Main = props => (
  <div>
    {props.children}
  </div>
  );

// Setting prop types for Main as required by React documentation
Main.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]).isRequired
};

export default Main;
