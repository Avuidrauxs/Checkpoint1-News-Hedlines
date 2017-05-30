import React from 'react';
import PropTypes from 'prop-types';
import HeadlineItem from './HeadlineItem';

/**
 * This component creates the headlines list
 * @class HeadlineList
 * @extends {React.Component}
 * @type {Object}
 */
class HeadlineList extends React.Component {
/**
 * This renders the hierachy of views for this component
 * @memberof HeadlineList
 * @return {React.Component} - returns react component
 */
  render() {
    const { sources } = this.props;
    const renderHeadlines = () => sources.map(source => (
      <HeadlineItem
        key={source.id}
        {...source}
      />
        ));

    return (
      <div>
        {renderHeadlines()}
      </div>
    );
  }
}
HeadlineList.propTypes = {
  sources: PropTypes.array
};

HeadlineList.defaultProps = {
  sources: []
};

export default HeadlineList;
