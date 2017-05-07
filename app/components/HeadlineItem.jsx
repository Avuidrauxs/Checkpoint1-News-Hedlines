import React from 'react';

export default class HeadlineItem extends React.Component{

  constructor(props){
    super(props)

  }
  handleSubmit(e){
    e.preventDefault();
    const urlText = this.props.url;

    this.props.onClickURL(urlText);


  }
//  <a className= 'button' href={url} target='blank' ref='url'>More Info</a>
  render(){
    const { name, description, url } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h4>{name}</h4>
          <p>{description}.</p>


          <button className='button' >Read More</button>
        </form>
      </div>
    )
  }

}
