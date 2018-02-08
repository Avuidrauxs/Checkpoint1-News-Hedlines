import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';
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
   * This function logs the user out
   * @return {null} returns nothing
   */
  logOut () {
    const history = createHistory({ forceRefresh: true });
    if (localStorage.getItem('profile')) {
      localStorage.clear();
      history.push('/#/');
      window.location.reload();
    }
  }

  /**
   * This function handles the View Articles button event to fetch articles
   * @memberof Nav
   * @return {null} - returns nothing
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
    const userProfile = JSON.parse(localStorage.getItem('profile'));
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu menu-left">
            <li><h4>Bad News App</h4></li>
          </ul>
        </div>
        <div className="profile-pic" style={{ marginRight: '30px' }}>
          <img
            src={!userProfile.imageUrl ?
              profilePlaceholder :
              userProfile.imageUrl}
            alt="no-pic"
          />
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
              style={{ marginRight: '80px', backgroundColor: 'red' }}
              onClick={this.logOut}
            >
                Logout, {userProfile.givenName}
            </button></li>
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
