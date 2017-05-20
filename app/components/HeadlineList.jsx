import React from 'react';
import HeadlineItem from './HeadlineItem';
import { connect } from 'react-redux';

export class HeadlineList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { sources, dispatch } = this.props;
    const renderHeadlines = () => sources.map((source) => {
      if (source.sortBysAvailable.indexOf('latest') > 0) {
        return (
          <HeadlineItem
            key={source.id}
            {...source}
            onClickURL={this.handleGoToArticles}
            showLatest={false}
          />
        );
      }
      return (
        <HeadlineItem
          key={source.id}
          {...source}
          onClickURL={this.handleGoToArticles}
          showLatest
        />);
    });

    return (
      <div>
        {renderHeadlines()}
      </div>
    );
  }
}
export default connect()(HeadlineList);
//   (state)=>{
//     return {
//       sources: state.sources
//     }
// })(HeadlineList)
