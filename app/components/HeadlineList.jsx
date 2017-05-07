import React from 'react';
import HeadlineItem from './HeadlineItem';

export default class HeadlineList extends React.Component{

  constructor(props){
    super(props)

  }
  handleGoToArticles(url){
    alert('I will go to ' + url);
  }

  render(){
    const {sources} = this.props;
    const renderHeadlines = ()=>{
      return sources.map((source)=>{
        return (
          <HeadlineItem key={source.id} {...source} onClickURL={this.handleGoToArticles}/>
        )
      });
    }
    return (
      <div>
        {renderHeadlines()}
      </div>
    )
  }

}
