import React from 'react';
import HeadlineItem from './HeadlineItem';

export default class HeadlineList extends React.Component{

  constructor(props){
    super(props)

  }

  render(){
    const {sources} = this.props;
    const renderHeadlines = ()=>{
      return sources.map((source)=>{
        return (
          <HeadlineItem key={source.id} {...source}/>
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
