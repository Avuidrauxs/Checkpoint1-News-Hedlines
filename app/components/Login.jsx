import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, browserHistory } from 'react-router';
import GoogleLogin from 'react-google-login';
import { googleSignIn } from '../action/actions';



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
      if(!response.error) {
      this.setState({
        credentials: {
          email: userProfile.email,
          name: userProfile.name
        }
      });
        googleSignIn(this.state.credentials);
      window.location = '/#/news_home';
    } else {
      alert("Google log in error");
    }
    console.log(sessionStorage.getItem(userProfile));
  }
  render() {
    const googleId = '333746722874-22bu4jv27tme8rtq73q8nvjq23nu3cqm.apps.googleusercontent.com';
    return (
      <div className="large-3 large-centered columns">
        <div className="login-box">
          <div className="row">
            <div className="large-12 columns">
              <form>
                <div className="row">
                  <div className="large-12 columns">
                    <input type="text" name="username" placeholder="Username" />
                  </div>
                </div>
                <div className="row">
                  <div className="large-12 columns">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="large-12 large-centered columns">
                    <Link to="/news_home" className="button expand">
                      {" "}<img src="#" alt="G-login" />{" "}
                    </Link>
                    <GoogleLogin
                    clientId={googleId}
                    buttonText="Sign In"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    />
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
