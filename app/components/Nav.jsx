var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
      e.preventDefault();
      alert('Not yet wired up!');
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Bad News App</li>
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
  }
});

module.exports = Nav;
