import React from 'react';

export default class HeadlineSearch extends React.Component{

  constructor(props){
    super(props)
  }
  handleSearch(){
    const top = this.refs.Top.checked;
    const searchText = this.refs.searchText.value;

    this.props.onSearch(top,searchText);
  }
  render(){
    return(
    <div className='container__header'>
      <div>
        <input type='text' placeholder='Enter a news source you want' ref='searchText' onChange={this.handleSearch.bind(this)}/>
      </div>
      <div>
        <label>
        <input type='checkbox' ref='Top' onChange={this.handleSearch.bind(this)}/>
        Latest Headlines
        </label>
      </div>
    </div>
    )
  }

}
