const React = require('react');
const { Link, IndexLink } = require('react-router');

export default class Nav extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      token: false
    }
  }

  checkToken(){
    const tempToken = localStorage.getItem('jwtToken');
    if(tempToken){
      this.setState({
        token: false
      })
    } else {
      this.setState({
        token: true
      })
    }
  }
  logOut() {
    localStorage.clear();
    console.log('cleared');
  }
  onSearch(e) {
    e.preventDefault();
    alert('Not yet wired up!');
  }
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text"><h3>Bad News App</h3></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form>
            <ul className="menu" hidden={this.state.token}>
              <Link to="/" className="button" onClick={this.logOut()}>LOG OUT</Link>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}
