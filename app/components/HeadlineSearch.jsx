import React from 'react';

export default class HeadlineSearch extends React.Component{

  constructor(props){
    super(props)
  }
  handleSearch(){
    const showWorldNews = this.refs.showWorldNews.checked;
    const searchText = this.refs.searchText.value;

    this.props.onSearch(showWorldNews,searchText);
  }
  render(){
    return(
    <div className='container__header'>
      <div>
        <input type='text' placeholder='Enter a news source you want' ref='searchText' onChange={this.handleSearch.bind(this)}/>
      </div>
      <div>
        <label>
        <input type='radio' ref='Top' checked={true} onChange={this.handleSearch.bind(this)}/>
        Show World News
        </label>
        <label>
        <input type='radio' ref='Latest' onChange={this.handleSearch.bind(this)}/>
        Show World News
        </label>
      </div>
    </div>
    )
  }

}
