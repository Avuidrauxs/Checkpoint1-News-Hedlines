import React from 'react';
import GoogleLogin from 'react-google-login';
// import PropTypes from 'prop-types';
import gplus from '../images/gplus.png';
// import Nav from './Nav';
/**
 * This component handles the Signin into the app using Google login
 * @class Login
 * @extends {React.Component}
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
    if (!response.error) {
      this.setState({
        credentials: {
          email: userProfile.email,
          name: userProfile.name
        }
      });
      // localStorage.setItem('jwtToken', 'I dey');
      // new Nav().checkToken();
      window.location = '/#/news_home';
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
      <div className="large-3 large-centered columns">
        <div className="login-box">
          <div className="row">
            <div className="large-12 columns">
              <form>
                <div className="row centered">
                  <div>
                    <p>Welcome to the Bad News App sign in to view news sources</p>
                  </div>
                  <div className="large-12 large-centered columns">
                    <GoogleLogin
                      clientId={process.env.GOOGLE_CLIENT_ID}
                      buttonText=""
                      onSuccess={this.responseGoogle}
                      onFailure={this.responseGoogle}
                    ><img src={gplus} alt="G-login" /></GoogleLogin>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
