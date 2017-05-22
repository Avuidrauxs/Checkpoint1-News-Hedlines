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
    this.state = { isChecked: false };
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

/**
 * [handleSubmit description]
 * @param  {object} e - handles events from button
 * @return {null}   - no return values
 */
  handleSubmit(e) {
    e.preventDefault();
    const { id } = this.props;
    new NewsHome().handleGetArticles(id.toLowerCase(), false);
    if (this.state.isChecked) {
      this.setState({ isChecked: !this.state.isChecked });
    }
  }
/**
 * This function handles getting Latest headlines when the checkbox is checked
 * @memberof HeadlineItem
 * @return {null} - no return value
 */
  handleCheckbox() {
    const { id } = this.props;
    if (!this.state.isChecked) {
      new NewsHome().handleGetArticles(id.toLowerCase(), true);
      this.setState({ isChecked: true });
    } else {
      new NewsHome().handleGetArticles(id.toLowerCase(), false);
      this.setState({ isChecked: false });
    }
  }

/**
 * This function renders the HeadlineItem component
 * @memberof HeadlineItem
 * @return {null} -returns no value
 */
  render() {
    const { name, description, showLatest, htmlFor } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>{name}</h4>
          <p>{description}.</p>
          <button className="button" >View Articles</button>
          <label htmlFor={htmlFor} hidden={showLatest}>
            <input
              type="checkbox"
              checked={this.state.isChecked}
              onChange={this.handleCheckbox}
              hidden={showLatest}
            />
            Latest Headlines
          </label>
        </form>
      </div>
    );
  }

}

HeadlineItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  showLatest: PropTypes.bool,
  htmlFor: PropTypes.string
};
HeadlineItem.defaultProps = {
  name: '',
  description: '',
  id: '#',
  showLatest: false,
  htmlFor: ''
};
export default HeadlineItem;
