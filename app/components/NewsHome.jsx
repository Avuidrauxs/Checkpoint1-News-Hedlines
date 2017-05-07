import React from 'react';
import HeadlineList from './HeadlineList';
import NewsAPI from '../api/NewsAPI';
import HeadlineSearch from './HeadlineSearch';
import Articles from './Articles'

export default class NewsHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newsSources: [],
      showWorldNews: false,
      searchText: '',
      articles: [
        {
    "author": "Lauren Said-Moorhouse, Hilary Clarke and Blathnaid Healy, CNN",
    "title": "French election: Live updates",
    "description": "Emmanuel Macron will become France's next president, defeating far-right rival Marine Le Pen. Get the latest updates here.",
    "url": "http://www.cnn.com/2017/05/07/europe/french-election-live-updates/index.html",
    "urlToImage": "http://i2.cdn.cnn.com/cnnnext/dam/assets/170507172720-frenchelex-blog-super-tease.jpg",
    "publishedAt": "2017-05-07T19:34:56Z"
  },
  {
    "author": null,
    "title": "How Emmanuel Macron won the French presidency - CNN Video",
    "description": "Emmanuel Macron will become France's next president, according to exit estimates compiled by Elabe for CNN's French affiliate BFM. CNN's Melissa Bell explains how he achieved that.",
    "url": "http://www.cnn.com/videos/world/2017/05/03/how-macron-won-french-presidency-orig.cnn",
    "urlToImage": "http://i2.cdn.cnn.com/cnnnext/dam/assets/170503084511-macron-thumb-2-super-tease.jpg",
    "publishedAt": null
  },
  {
    "author": "Edward Lucas",
    "title": "Why Macron's victory is reassuring ... and yet not",
    "description": "Though Macron's victory is important for the health of the EU, the election highlights the fragility of a political system that has become vulnerable to exploitation, writes Edward Lucas",
    "url": "http://www.cnn.com/2017/05/07/opinions/meaning-macron-victory-opinion-lucas/index.html",
    "urlToImage": "http://i2.cdn.cnn.com/cnnnext/dam/assets/170507140526-02-emmanuel-macron-0507-super-tease.jpg",
    "publishedAt": "2017-05-07T19:52:46Z"
  }
      ]
    };
    //This fetches all the news sources from newsapi.org
    this.getAllNews();
  }
  filteredSearch(newsSources,showWorldNews,searchText){
    let filteredSearch = newsSources;

    //Filter by Show World News
    // filteredSearch = filteredSearch.filter((source)=>{
    //     return source.category !== 'technology';
    // })
    //Filter by Search text
    filteredSearch = filteredSearch.filter((source)=>{
      const text = source.name.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    })

    //Sort news

    return filteredSearch;
  }
  //this method will handle search of haadlines
  handleSearch(showWorldNews, searchText) {
    this.setState({showWorldNews: showWorldNews, searchText: searchText.toLowerCase()})

  }
  componentDidMount(){

  }
  getAllNews() {
    NewsAPI.getNews().then(res => {
      const newsSources = res;
      this.setState({newsSources});
      console.log(newsSources);
    }, err => {
      console.log(err);
    });
  }
  renderArticles(source){
    NewsAPI.getSources(source).then((res) => {
        const articles = res;
        callback(res)
        this.setState({ articles: articles});
        console.log(sources);
      },err => {
        console.log(err);
      });

  }
  render() {
    const {newsSources, showWorldNews,searchText} = this.state;
    const filteredSearch = this.filteredSearch(newsSources,showWorldNews,searchText);
    return (
      <div>
        <h1 className='page-title'>Bad News</h1>

        <div className='row'>

          <div className='column small-right small-11 medium-6 large-5'>
            <div className='container'>
              <HeadlineSearch onSearch={this.handleSearch.bind(this)} />
              <HeadlineList sources={filteredSearch}/>
            </div>
          </div>

          {this.state.articles.map((article)=>{

            return <Articles key={article.id} title={article.title} description={article.description} url={article.url}/>
          })}


        </div>


      </div>
    )
  }

}
