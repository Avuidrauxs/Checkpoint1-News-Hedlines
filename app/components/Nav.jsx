const React = require('react');
const { Link, IndexLink } = require('react-router');

const Nav = React.createClass({
  onSearch(e) {
    e.preventDefault();
    alert('Not yet wired up!');
  },
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
            <ul className="menu">
              <Link to="/" className="button">LOG OUT</Link>
            </ul>
          </form>
        </div>
      </div>
    );
  },
});

module.exports = Nav;
