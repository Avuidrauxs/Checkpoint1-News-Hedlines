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
    this.handleViewArticlesBtn = this.handleViewArticlesBtn.bind(this);
    this.handleRadioBtn = this.handleRadioBtn.bind(this);
  }

/**
 * [handleSubmit description]
 * @param  {object} e - handles events from button
 * @return {null}   - no return values
 */
  handleViewArticlesBtn(e) {
    e.preventDefault();
    const { id, sortBysAvailable } = this.props;
    //this.state.newsHome.handleGetArticles(id.toLowerCase(), sortBysAvailable[0]);
    //
    console.log('i dey inside');
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
  handleRadioBtn(e) {
    const { id } = this.props;
    const sortValue = e.target.value;
    this.state.newsHome.handleGetArticles(id.toLowerCase(), sortValue);
    this.setState({ isChecked: true });
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
        type="radio"
        name="sort"
        value={sort}
        onChange={this.handleRadioBtn}
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
        <button className="button" onClick={this.handleViewArticlesBtn}>View Articles</button>
        <div>
          <group className="inline-radio">{sortBysAvailable.slice(1).map(renderSorts)}</group>
        </div>
      </div>
    );
  }

}

HeadlineItem.propTypes = {
  name: PropTypes.string,
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
