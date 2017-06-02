import React from 'react';
import PropTypes from 'prop-types';
import {
  ShareButtons,
  generateShareIcon
} from 'react-share';
import pop from '../styles/favourite-button';


/**
 * This component renders Articles
 * @class Articles
 * @extends {React.Component}
 * @type {String}
 */
export default class Articles extends React.Component {

/**
 * This is the Articles class cosntructor
 * @param  {array} props - contains prop parameters
 * @return {null}       - returns nothing
 */
  constructor(props) {
    super(props);
    this.saveFavourites = this.saveFavourites.bind(this);
  }
/**
 * This function saves favourite articles
 * @param {object} e - the event object
 * @return {null} - returns nothing
 */
  saveFavourites(e) {
    pop(e.target.id, this.props);
    // let favouriteArticles = [];
    // const favourite = {
    //   ...this.props
    // };
    // if (localStorage.getItem('favourites')) {
    //   favouriteArticles = JSON.parse(localStorage.getItem('favourites'));
    //   favouriteArticles.push(favourite);
    //   localStorage.setItem('favourites', JSON.stringify(favouriteArticles));
    // } else {
    //   favouriteArticles.push(favourite);
    //   localStorage.setItem('favourites', JSON.stringify(favouriteArticles));
    // }
  }
/**
 * This function renders the hierachy of views for Article component
 * @return {React.Component} returns a react component
 */
  render() {
    const {
      title,
      description,
      url,
      urlToImage,
      author,
    } = this.props;
    const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton
} = ShareButtons;
    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const GooglePlusIcon = generateShareIcon('google');
    const LinkedinIcon = generateShareIcon('linkedin');
    return (

      <div className="wide-article-link">
        <div className="row">
          <div className="small-12 medium-9 columns">
            <h4 className="article-title">
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </h4>
            <p
              className="article-author"
            >
              <em>by
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {!author ? ' Anonnymous' : ` ${author}` }
                </a>
              </em>
            </p>
            <p
              className="article-elipsis"
            >{description}
              <a
                href={url}
                target="_blank" rel="noopener noreferrer" className="read-more"
              >...Read more
              </a></p>
            <div className="article-social">

              <a className="button social facebook">
                <FacebookShareButton url={url}>
                  <FacebookIcon size={20} round />
                </FacebookShareButton>
              </a>
              <a className="button social twitter">
                <TwitterShareButton url={url}>
                  <TwitterIcon size={20} round />
                </TwitterShareButton>
              </a>
              <a className="button social linkedin">
                <LinkedinShareButton url={url}>
                  <LinkedinIcon size={20} round />
                </LinkedinShareButton>
              </a>
              <a className=" button social google-plus">
                <GooglePlusShareButton url={url}>
                  <GooglePlusIcon size={20} round />
                </GooglePlusShareButton>
              </a>
              <a className="button" style={{ backgroundColor: 'white' }}>
                <button id={title} className="button-like" onClick={this.saveFavourites}>
                  <i className="fa fa-heart" />
                  <span>Favourite</span>
                </button>
              </a>
              <div id="snackbar">Added to favourites</div>
              <div id="unFavourite">Removed from favourites</div>
            </div>
          </div>
          <div className="small-12 medium-3 columns flex-container align-middle">
            <img src={urlToImage} alt="Not  available" />
          </div>
        </div>
      </div>


    );
  }
}

Articles.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
  author: PropTypes.string,
};

Articles.defaultProps = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
  author: PropTypes.string,
  publishedAt: PropTypes.string
};
