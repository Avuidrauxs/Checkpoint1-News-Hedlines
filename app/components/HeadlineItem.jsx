import React from 'react';

export default class HeadlineItem extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    const { name, description, url } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <p>{description}.</p>
        <a href={url} target='blank'>More Info</a>
      </div>
    )
  }

}
