import React from "react";
import HeadlineList from "./HeadlineList";
import NewsAPI from "../api/NewsAPI";
import HeadlineSearch from "./HeadlineSearch";
import Articles from "./Articles";
import { fetchNewsFinal } from "actions";
import { connect } from "react-redux";

export class NewsHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsSources: [],
      top: false,
      searchText: '',
      articles: []
    };
    //This fetches all the news sources from newsapi.org
    //this.getAllNews();

  }
  filteredSearch(newsSources,searchText) {
    let filteredSearch = newsSources;

    filteredSearch = filteredSearch.filter((source) => {
      const text = source.name.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });
    return filteredSearch;
  }
  //this method will handle search of haadlines
  handleSearch(searchText) {
    this.setState({
      searchText: searchText.toLowerCase()
    });
  }
  render() {
    const { top, searchText } = this.state;
    const { dispatch, newsSources, articles } = this.props;
    dispatch(fetchNewsFinal());
    //dispatch(fetchAllArticles('ign'));
    //console.log(articles);

    const filteredSearch = this.filteredSearch(
      newsSources,
      searchText
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
          <div className='small-right 5'>
              <div className="container-hybrid">
          {articles.map((article) => {
            return (

              <Articles
                key={article.id}
                title={article.title}
                description={article.description}
                url={article.url}
                publishedAt={article.publishedAt}
                urlToImage={article.urlToImage}
                author={article.author}
              />
            );
          })}
        </div>

        </div>

        </div>

      </div>
    );
  }
}
export default connect((state) => {
  return {
    newsSources: state.getAllNews,
    articles: state.fetchArticles,
    credentials: state.credentials
  };
})(NewsHome);
