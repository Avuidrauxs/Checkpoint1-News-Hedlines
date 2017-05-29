import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';
// const { Link } = require('react-router');
import profilePlaceholder from '../images/profile-placeholder.png';

/**
 * This class renders the Navigation component for Bad News App
 * @class Nav
 * @extends {React.Component}
 * @type {Object}
 */
class Nav extends Component {
/**
 * Nav constructor
 * @param  {object} props - holds parameters passed from other components
 * @return {null}       - returns no value
 */
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.handleFavouriteBtn = this.handleFavouriteBtn.bind(this);
  }

  /**
   * Log the user out when visited
   * @return {null} redirects user to login page
   */
  logOut () {
    const history = createHistory({ forceRefresh: true });
    if (global.window.localStorage.getItem('profile')) {
      global.window.localStorage.clear();
      history.push('/#/');
      global.window.location.reload();
    }
  }
  /**
   * This function handles the View Articles button
   * @memberof Nav
   * @return {null} [description]
   */
  handleFavouriteBtn() {
    this.props.handleFavBtn();
  }

  /**
   * This method renders the Navigation component
   * @memberof Nav
   * @return {React.Component} - returns a hierachy of views to form the component
   */
  render() {
    const userProfile = JSON.parse(global.window.localStorage.getItem('profile'));
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu menu-left">
            <li><h4>Bad News App</h4></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu menu-right" >
            <li><button
              className="button"
              style={{ marginRight: '10px', backgroundColor: 'green' }}
              onClick={this.handleFavouriteBtn}
            >
                View Favourites</button></li>
            <li><button
              className="button"
              style={{ marginRight: '30px', backgroundColor: 'red' }}
              onClick={this.logOut}
            >
                Logout, {userProfile.givenName}
            </button></li>
            <div className="profile-pic">
              <img
                src={!userProfile.imageUrl ? profilePlaceholder : userProfile.imageUrl}
                alt="no-pic"
              />
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
Nav.propTypes = {
  handleFavBtn: PropTypes.func
};
Nav.defaultProps = {
  handleFavBtn: () => {}
};
export default Nav;
