import React from 'react';
import HeadlineList from './HeadlineList';
import NewsAPI from '../api/NewsAPI';
import HeadlineSearch from './HeadlineSearch';
import Articles from './Articles';
import { fetchNewsFinal } from 'actions';
import { connect } from 'react-redux';
import SourcesStore from '../store/SourcesStore';
import ArticlesStore from '../store/ArticlesStore';
import { fetchAllNewsSources, fetchAllArticles } from '../action/fluxActions';


export class NewsHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsSources: [],
      top: false,
      searchText: '',
      articles: [],
      altSources: [],
      altArticles: [],
      articleTitle: ''
    };
    this.getSources = this.getSources.bind(this);
    this.getArticles = this.getArticles.bind(this);
  }
  componentDidMount(){
    fetchAllNewsSources();
    SourcesStore.on('change', this.getSources);
    // ArticlesStore.on('change', this.getArticles);
  }
  componentWillUnmount() {
    SourcesStore.removeListener('change', this.getSources);
    // ArticlesStore.removeListener('change', this.getArticles);
  }
  componentDidUpdate(){
    ArticlesStore.on('change', this.getArticles);
  }
  getSources(){
    this.setState({
      altSources: SourcesStore.getAllNewsSources()
    })
  }



  filteredSearch(newsSources, searchText) {
    let filteredSearch = newsSources;

    filteredSearch = filteredSearch.filter((source) => {
      const text = source.name.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });
    return filteredSearch;
  }
  getArticles(){
    this.setState({
      altArticles: ArticlesStore.getAllNewsArticles()
    });
  }
  handleGetArticles(sourceID, sort){
    fetchAllArticles(sourceID, sort);
    ArticlesStore.on('change', this.getArticles);
  }
  // this method will handle search of haadlines
  handleSearch(searchText) {
    this.setState({
      searchText: searchText.toLowerCase(),
    });
  }
  render() {
    const { top, searchText, altSources, altArticles } = this.state;
    const filteredSearch = this.filteredSearch(
      altSources,
      searchText,
    );
    return (
      <div>
        <div className="row">
          <div className="column small-right small-11 medium-6 large-5">
            <div className="container">
              <HeadlineSearch onSearch={this.handleSearch.bind(this)} top={top} />
              <div className="container-hybrid">
                <HeadlineList sources={filteredSearch} />
              </div>
            </div>
          </div>
          <div className="small-right 5">
            <h3>{this.state.articleTitle}</h3>
            <div className="container-hybrid">
              {altArticles.map(article => (

                <Articles
                  key={article.id}
                  title={article.title}
                  description={article.description}
                  url={article.url}
                  publishedAt={article.publishedAt}
                  urlToImage={article.urlToImage}
                  author={article.author}
                />
            ))}
            </div>

          </div>

        </div>

      </div>
    );
  }
}
export default connect(state => ({
  newsSources: state.getAllNews,
  articles: state.fetchArticles,
  credentials: state.credentials,
}))(NewsHome);
