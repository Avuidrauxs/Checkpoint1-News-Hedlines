import React from 'react';
import {connect} from 'react-redux';
import { fetchAllArticles } from 'actions';

export class HeadlineItem extends React.Component{

  constructor(props){
    super(props)

  }
  handleSubmit(e){
    e.preventDefault();
    const { Top } = this.refs;
    const{ dispatch, urlText, onClickURL, id } = this.props;
    //const urlText = this.props.url;

    onClickURL(id);
    if(Top.checked){
    dispatch(fetchAllArticles(id.toLowerCase(), Top.checked));
    Top.checked = false;
  } else{
    dispatch(fetchAllArticles(id.toLowerCase(), false));
  }
}
//  <a className= 'button' href={url} target='blank' ref='url'>More Info</a>

  render(){
    const { name, description, url, dispatch } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h4>{name}</h4>
          <p>{description}.</p>


          <button className='button' >Read More</button>
            <label>
            <input type='checkbox' ref='Top' onChange={this.handleSubmit.bind(this)} />
            Latest Headlines
            </label>
        </form>
      </div>
    )
  }

}
export default connect()(HeadlineItem)
