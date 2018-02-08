import React, { Component } from 'react';
import HeadlineList from './HeadlineList';
import HeadlineSearch from './HeadlineSearch';
import Articles from './Articles';
import SourcesStore from '../store/SourcesStore';
import ArticlesStore from '../store/NewsArticlesStore';
import Nav from './Nav';
import { fetchAllNewsSources, fetchAllArticles } from '../action/NewsActions';

/**
 * This class renders the NewsHome component which is the main page
 * to view the news sources
 * @type {Object}
 * @extends {React.Component}
 */
export class NewsHome extends Component {
  /**
   * This is the NewsHome constructor
   * @param  {object} props - holds parameters entered from outside component.
   * @return {null} - returns no value
   */
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      newsSources: [],
      allArticles: [],
      articleTitle: 'Select a news source to view articles',
      isMounted: false
    };
    this.getSources = this.getSources.bind(this);
    this.getArticles = this.getArticles.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.filteredSearch = this.filteredSearch.bind(this);
    this.fetchFavourites = this.fetchFavourites.bind(this);
  }

  /**
   * This method mounts the fetchAllNewsSources action function when it is about
   *to be rendered on the DOM. Props are passed to the action method and an API call is made.
   *The store updates the state of the article prop when the componentDidMount function is fired.
   * @memberof NewsHome
   * @return {null} - returns no value
   */
  componentDidMount() {
    this.state.isMounted = true;
    fetchAllNewsSources();
    SourcesStore.on('change', this.getSources);
    ArticlesStore.on('change', this.getArticles);
  }

  /**
   *
   *This method unmounts the rendered component using the removeListener method and updates the
   *state of articles.
   * @memberof NewsHome
   * @return {null} - returns no value
   */
  componentWillUnmount() {
    this.state.isMounted = false;
    SourcesStore.removeListener('change', this.getSources);
    ArticlesStore.removeListener('change', this.getArticles);
  }

  /**
   * This method fetches all the news sources from the store and sets the sources state
   * @memberof NewsHome
   * @return {null} - returns no value
   */
  getSources() {
    this.setState({
      newsSources: SourcesStore.getAllNewsSources()
    });
  }

/**
 * This method fetches all articles based on the newsource seelected and sets the articles state
 * @memberof NewsHome
 * @return {null} - returns no value
 */
  getArticles() {
    if (this.state.isMounted === true) {
      this.setState({
        allArticles: ArticlesStore.getAllNewsArticles().articles,
        articleTitle: ArticlesStore.getAllNewsArticles().articleSource
      });
    }
  }
  /**
   * This method fetches favourite news articles
   * @return {null} - returns nothing
   */
  fetchFavourites() {
    this.setState({
      allArticles: JSON.parse(localStorage.getItem('favourites')),
      articleTitle: 'FAVOURITES'
    });
  }

  /**
   * This method is for searching throught the news sources list
   * @memberof NewsHome
   * @param  {array} newsSources - takes an array of news sources
   * @param  {string} searchText  - takes a string to filter throught the source list
   * @return {array}           - returns an array 'filteredSearch'
   */
  filteredSearch(newsSources, searchText) {
    const filteredSearch = newsSources.filter((source) => {
      const text = source.name.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });
    return filteredSearch;
  }

  /**
   * This method handles the fetching of News source articles by dispatching an action
   * and triggering an event
   * @memberof NewsHome
   * @param  {string} sourceID - the id of the news source whose articles will be fetched
   * @param  {Boolean} sort     - the sort parameter to sort by top or latest headline articles
   * @return {null}          - returns no value
   */
  handleGetArticles(sourceID, sort) {
    fetchAllArticles(sourceID, sort);
    ArticlesStore.on('change', this.getArticles);
  }

/**
 * This method handles setting the searchText state with test from the search input component
 * @memberof NewsHome
 * @param  {string} searchText - string to set searchText state
 * @return {null}            - returns no value
 */
  handleSearch(searchText) {
    this.setState({
      searchText: searchText.toLowerCase(),
    });
  }

  /**
   * This renders the  component
   * @memberof NewsHome
   * @return {React.Component} - returns he hierachy of views required for this component
   */
  render() {
    const { top, searchText, newsSources, allArticles, articleTitle } = this.state;
    const filteredSearch = this.filteredSearch(
      newsSources,
      searchText
    );
    return (
      <div>
        <Nav handleFavBtn={this.fetchFavourites} />
        <div className="row" style={{ marginTop: '40px' }}>
          <div className="column small-right small-11 medium-6 large-5">
            <div className="container">
              <HeadlineSearch onSearch={this.handleSearch} top={top} />
              <div className="container-hybrid">
                <HeadlineList sources={filteredSearch} />
              </div>
            </div>
          </div>
          <div className="small-right 5">
            <h5 className="page-title">{articleTitle.toUpperCase()}</h5>
            <div className="container-hybrid">
              {allArticles.map(article => (

                <Articles
                  key={article.title}
                  title={article.title}
                  description={article.description}
                  url={article.url}
                  publishedAt={article.publishedAt}
                  urlToImage={article.urlToImage}
                  author={article.author}
                  like={article.like}
                />
            ))}
            </div>

          </div>

        </div>

      </div>
    );
  }
}
export default NewsHome;
