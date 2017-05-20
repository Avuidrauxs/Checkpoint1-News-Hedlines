import React from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import gplus from '../images/gplus.png';
import Nav from './Nav';


export class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { credentials: {
      email: '',
      name: ''
    } };
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  responseGoogle(response) {
    const userProfile = response.profileObj;
    if (!response.error) {
      this.setState({
        credentials: {
          email: userProfile.email,
          name: userProfile.name
        }
      });
      localStorage.setItem('jwtToken', 'I dey');
      new Nav().checkToken();
      window.location = '/#/news_home';
        } else {
          alert("Google log in error");
        }
      }
  render() {
    const googleId = '333746722874-22bu4jv27tme8rtq73q8nvjq23nu3cqm.apps.googleusercontent.com';
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
                      clientId={googleId}
                      buttonText="Sign In"
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

export default connect()(Login);
