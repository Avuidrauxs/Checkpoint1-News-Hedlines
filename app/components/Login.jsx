import React from 'react';
import createHistory from 'history/createBrowserHistory';
import GoogleLogin from 'react-google-login';
// import PropTypes from 'prop-types';
import gplus from '../images/gplus.png';
// import Nav from './Nav';
/**
 * This component handles the Signin into the app using Google login
 * @class Login
 * @extends {React.Component}
 * @type {Object}
 */
class Login extends React.Component {
/**
 * Login constructor
 * @param  {object} props - holds parameters entered from outside component
 * @return {null}       - returns no value
 */
  constructor(props) {
    super(props);
    this.state = { credentials: {
      email: '',
      name: ''
    } };
    this.saveGoogleCredentials = this.saveGoogleCredentials.bind(this);
  }
/**
 * This method saves the googles response object to localStorage
 * @param  {response} response - google id response object
 * @return {null}          nothing is returned
 */
  saveGoogleCredentials(response) {
    const userProfile = response.profileObj;
    const history = createHistory({ forceRefresh: true });
    if (!response.error) {
      localStorage.setItem('profile', JSON.stringify(userProfile));
      history.push('/#/news_home');
      window.location.reload();
    } else {
      // alert('Google log in error');
    }
  }
  /**
   * This method renders the components
   * @memberof Login
   * @return {React.Component} - returns a hierachy of views to make up the component
   */
  render() {
    return (
      <div className="login-box">
        <div className="row collapse expanded">
          <div className="small-12 medium-6 column small-order-2 medium-order-1">
            <div className="login-box-form-section">
              <h1 className="login-box-title">Welcome to</h1>
              <h1>Bad News App</h1>
              <h3 className="login-box-title">This website gives news all over the globe</h3>

            </div>
          </div>
          <div
            className="small-12 medium-6
            column small-order-1
            medium-order-2
            login-box-social-section"
          >
            <div className="login-box-social-section-inner">
              <span className="login-box-social-headline">
                Sign in with<br />Google+
              </span>
              <a className="login-box-social-button-google">
                <GoogleLogin
                  clientId={process.env.GOOGLE_CLIENT_ID}
                  buttonText="Sign In"
                  onSuccess={this.saveGoogleCredentials}
                  onFailure={this.saveGoogleCredentials}
                ><img src={gplus} alt="G-login" /></GoogleLogin></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
