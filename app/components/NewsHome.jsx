import React from 'react';
import HeadlineList from './HeadlineList';
import NewsAPI from '../api/NewsAPI';

export default class NewsHome extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      newsSources:[]
    };
    //This fetches all the news sources from newsapi.org
    this.getAllNews();
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
    <HeadlineList sources={this.state.newsSources}/>

</div>)
  }

}
