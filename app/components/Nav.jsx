const React = require('react');
const { Link } = require('react-router');

/**
 * This class renders the Navigation component for Bad News App
 * @class Nav
 * @extends {React.Component}
 * @type {Object}
 */
class Nav extends React.Component {
/**
 * Nav constructor
 * @param  {object} props - holds parameters passed from other components
 * @return {null}       - returns no value
 */
  constructor(props) {
    super(props);
    this.state = {
      token: false
    };
    this.logOut = this.logOut.bind(this);
  }
/**
 * This method checks whether JSON WEb Token exists for the current user
 * @memberof Nav
 * @return {null} - returns no value
 */
  checkToken() {
    const tempToken = localStorage.getItem('jwtToken');
    if (tempToken) {
      this.setState({
        token: false
      });
    } else {
      this.setState({
        token: true
      });
    }
  }
  /**
   * This method logs the user out and clears my token
   * @memberof Nav
   * @return {null} - returns no value
   */
  logOut() {
    // Code goes here
  }
  /**
   * This method renders the Navigation component
   * @memberof Nav
   * @return {React.Component} - returns a hierachy of views to form the component
   */
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu menu-left">
            <li className=""><h4>Bad News App</h4></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.logOut}>
            <ul className="menu menu-right" hidden={this.state.token}>
              <Link to="/" className="button">LOG OUT</Link>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Nav;
