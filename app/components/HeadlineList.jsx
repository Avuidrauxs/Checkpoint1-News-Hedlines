import React from 'react';
import HeadlineItem from './HeadlineItem';

/**
 * This component creates the headlines list
 * @class HeadlineList
 * @extends {React.Component}
 * @type {Object}
 */
class HeadlineList extends React.Component {

  /**
   * HeadlineList constructor method
   * @param  {array} props - contains prop parameters
   * @return {null}  - returns nothing
   */
  constructor(props) {
    super(props);
    this.renderHeadlines = this.renderHeadlines.bind(this);
  }

/**
 * This method renders the news healine sources into a list
 * @memberof {HeadlineList}
 * @return {[type]} [description]
 */
  renderHeadlines() {
    const { sources } = this.props;
    return sources.map(source => (
      <HeadlineItem
        key={source.id}
        {...source}
      />
        ));
  }
/**
 * This renders the hierachy of views for this component
 * @memberof {HeadlineList}
 * @return {React.Component} - returns react component
 */
  render() {
    return (
      <div>
        {this.renderHeadlines()}
      </div>
    );
  }
}
// Setting prop types for HeadlineList component as required by the React documentation
HeadlineList.propTypes = {
  sources: React.PropTypes.arrayOf(React.PropTypes.object)
};
// Setting default prop types as required by React Documentation
HeadlineList.defaultProps = {
  sources: []
};

export default HeadlineList;
