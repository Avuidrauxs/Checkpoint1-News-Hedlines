import React from 'react';
import PropTypes from 'prop-types';
import { NewsHome } from './NewsHome';
/**
 * This component renders the News source headline item
 * @class HeadlineItem
 * @extends {React.Component}
 * @type {Object}
 */
class HeadlineItem extends React.Component {
/**
 * Headline item component class constructor
 * @param  {object} props - holds parameters from other components
 * @return {null}       - no return values
 */
  constructor(props) {
    super(props);
    this.state = { isChecked: false, newsHome: new NewsHome() };
    this.viewArticles = this.viewArticles.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

/**
 * This method handles view articles
 * @param  {object} e - handles events from button
 * @return {null}   - no return values
 */
  viewArticles(e) {
    e.preventDefault();
    const { id, sortBysAvailable } = this.props;
    this.state.newsHome.handleGetArticles(id.toLowerCase(), sortBysAvailable[0]);
    if (this.state.isChecked) {
      this.setState({ isChecked: !this.state.isChecked });
    }
  }
/**
 * This function handles getting Latest headlines when the checkbox is checked
 * @memberof HeadlineItem
 * @param {object} e - handles events from radio button
 * @return {null} - no return value
 */
  handleCheckbox(e) {
    const { id, sortBysAvailable } = this.props;
    const sortValue = e.target.value;
    if (!this.state.isChecked) {
      this.state.newsHome.handleGetArticles(id.toLowerCase(), sortValue);
      this.setState({ isChecked: !this.state.isChecked });
    } else {
      this.state.newsHome.handleGetArticles(id.toLowerCase(), sortBysAvailable[0]);
      this.setState({ isChecked: !this.state.isChecked });
    }
  }

/**
 * This function renders the HeadlineItem component
 * @memberof HeadlineItem
 * @return {null} -returns no value
 */
  render() {
    const { name, description, htmlFor, sortBysAvailable } = this.props;
    const renderSorts = sort => <div key={sort}>
      <input
        type="checkbox"
        name="sort"
        value={sort}
        onChange={this.handleCheckbox}
        checked={this.state.isChecked}
      />
      <label
        htmlFor={htmlFor}
      >{sort}
      </label></div>;
    return (
      <div>
        <h4>{name}</h4>
        <p>{description}.</p>
        <button className="button" onClick={this.viewArticles}>View Articles</button>
        <div>
          <group className="inline-radio">{sortBysAvailable.slice(1).map(renderSorts)}</group>
        </div>
      </div>
    );
  }

}

HeadlineItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  id: PropTypes.string,
  sortBysAvailable: PropTypes.array,
  htmlFor: PropTypes.string
};
HeadlineItem.defaultProps = {
  name: '',
  description: '',
  id: '#',
  sortBysAvailable: [],
  htmlFor: ''
};
export default HeadlineItem;
