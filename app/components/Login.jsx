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
    this.responseGoogle = this.responseGoogle.bind(this);
  }
/**
 * This method ha
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
  responseGoogle(response) {
    const userProfile = response.profileObj;
    const history = createHistory({ forceRefresh: true });
    if (!response.error) {
      global.window.localStorage.setItem('profile', JSON.stringify(userProfile));
      history.push('/#/news_home');
      global.window.location.reload();
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
            <div className="or">ENTER</div>
          </div>
          <div
            className="small-12 medium-6
            column small-order-1
            medium-order-2
            login-box-social-section"
          >
            <div className="login-box-social-section-inner">
              <span className="login-box-social-headline">
                Sign in with<br />your social network
              </span>
              <a className="login-box-social-button-google">
                <GoogleLogin
                  clientId={process.env.GOOGLE_CLIENT_ID}
                  buttonText="Sign In"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                ><img src={gplus} alt="G-login" /></GoogleLogin></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
