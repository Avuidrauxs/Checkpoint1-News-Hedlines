import React from 'react';
import HeadlineList from './HeadlineList';
import NewsAPI from '../api/NewsAPI';
import HeadlineSearch from './HeadlineSearch';

export default class NewsHome extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      newsSources:[],
      showWorldNews: false,
      searchText : ''
    };
    //This fetches all the news sources from newsapi.org
    this.getAllNews();
  }
  //this method will handle search of haadlines
handleSearch(showWorldNews,searchText){
  this.setState({
    showWorldNews: showWorldNews,
    searchText: searchText.toLowerCase()
  })

}
getAllNews(){
  NewsAPI.getNews().then(res => {
    const newsSources = res;
    this.setState({ newsSources });
    console.log(newsSources);
  },err => {
    console.log(err);
  });
}
  render(){

return(
<div>
    <HeadlineSearch onSearch={this.handleSearch.bind(this)}/>
    <HeadlineList sources={this.state.newsSources}/>

</div>)
  }

}
