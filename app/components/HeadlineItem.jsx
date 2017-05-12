import React from 'react';
import {connect} from 'react-redux';
import {fetchAllArticles} from 'actions';
class HeadlineItem extends React.Component{

  constructor(props){
    super(props)

  }
  handleSubmit(e){
    e.preventDefault();
    const{dispatch,urlText,onClickURL,id} = this.props;
    //const urlText = this.props.url;

    onClickURL(id);
    dispatch(fetchAllArticles(id.toLowerCase()));


  }
//  <a className= 'button' href={url} target='blank' ref='url'>More Info</a>
  render(){
    const { name, description, url,dispatch } = this.props;
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
export default connect()(HeadlineItem)
