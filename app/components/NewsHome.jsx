import React from 'react';
import HeadlineList from './HeadlineList';
import HeadlineSearch from './HeadlineSearch';
import Articles from './Articles';
import SourcesStore from '../store/SourcesStore';
import ArticlesStore from '../store/ArticlesStore';
import { fetchAllNewsSources, fetchAllArticles } from '../action/fluxActions';
/**
 * This class renders the NewsHome component which is the main page
 * to view the news sources
 * @class NewsHome
 * @type {Object}
 * @extends {React.Component}
 */
export class NewsHome extends React.Component {
  /**
   * This is the NewsHome constructor
   * @param  {object} props - holds parameters entered from outside component.
   * @return {null} - returns no value
   */
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      altSources: [],
      altArticles: [],
      articleTitle: 'Select a news source to view articles'
    };
    this.getSources = this.getSources.bind(this);
    this.getArticles = this.getArticles.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.filteredSearch = this.filteredSearch.bind(this);
  }
  /**
   * This method mounts the fetchAllNewsSources action function when it is about
   *to be rendered on the DOM. Props are passed to the action method and an API call is made.
   *The store updates the state of the article prop when the componentDidMount function is fired.
   * @memberof NewsHome
   * @return {null} - returns no value
   */
  componentDidMount() {
    fetchAllNewsSources();
    SourcesStore.on('change', this.getSources);
  }
  /**
   * This method updates the the components that handles the rendering of articles
   * and populates articles when action is dispatched
   * @memberof NewsHome
   *@return {null} - returns no value
   */
  componentDidUpdate() {
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
    SourcesStore.removeListener('change', this.getSources);
  }
  /**
   * This method fetches all the news sources from the store and sets the sources state
   * @memberof NewsHome
   * @return {null} - returns no value
   */
  getSources() {
    this.setState({
      altSources: SourcesStore.getAllNewsSources()
    });
  }
/**
 * This method fetches all articles based on the newsource seelected and sets the articles state
 * @memberof NewsHome
 * @return {null} - returns no value
 */
  getArticles() {
    this.setState({
      altArticles: ArticlesStore.getAllNewsArticles().articles,
      articleTitle: ArticlesStore.getAllNewsArticles().articleSource
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
    let filteredSearch = newsSources;

    filteredSearch = filteredSearch.filter((source) => {
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
    const { top, searchText, altSources, altArticles, articleTitle } = this.state;
    const filteredSearch = this.filteredSearch(
      altSources,
      searchText,
    );
    return (
      <div>
        <div className="row">
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
export default NewsHome;
