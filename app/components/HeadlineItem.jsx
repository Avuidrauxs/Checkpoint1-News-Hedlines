import React from 'react';

export default class HeadlineItem extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    const { title, description, url } = this.props;
    return (
      <div>
        <h4>{title}</h4>
        <p>{description}.</p>
        <a href={url} target='blank'>More Info</a>
      </div>
    )
  }

}
