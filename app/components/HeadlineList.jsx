import React from 'react';
import HeadlineItem from './HeadlineItem';
import {connect} from 'react-redux';

class HeadlineList extends React.Component{

  constructor(props){
    super(props)

  }
  handleGoToArticles(url){
    //alert('You are about to go ' + url);
  }

  render(){
    const {sources,dispatch} = this.props;
    const renderHeadlines = () => {
      return sources.map((source) => {
        if (source.sortBysAvailable.indexOf('latest') > 0){
        return (
          <HeadlineItem key={source.id} {...source} onClickURL={this.handleGoToArticles} />
        )}
      });
    }

    return (
      <div>
        {renderHeadlines()}
      </div>
    )
  }

}
export default connect()(HeadlineList)
//   (state)=>{
//     return {
//       sources: state.sources
//     }
// })(HeadlineList)
