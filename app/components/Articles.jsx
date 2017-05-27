import React from 'react';
import PropTypes from 'prop-types';
import {
  ShareButtons,
  generateShareIcon
} from 'react-share';

/**
 * This component renders Articles
 * @class Articles
 * @extends {React.Component}
 * @type {String}
 */
export default class Articles extends React.Component {
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
      publishedAt,
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

      <div className="card news-card">
        <div className="news-card-img">
          <img src={urlToImage} alt="Not  available" />
        </div>
        <div className="card-section">
          <div className="news-card-date">{ publishedAt ? publishedAt.split('T')[0] : '' }</div>
          <article className="news-card-article">
            <h4 className="news-card-title">
              <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
            </h4>
            <p className="news-card-description">
              {description}
            </p>
          </article>
          <div className="news-card-author">

            <div className="news-card-author-name">
              By {!author ? 'Anonnymous' : author }
              <div className="inline-radio">

                <FacebookShareButton url={url}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton url={url}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <LinkedinShareButton url={url}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <GooglePlusShareButton url={url}>
                  <GooglePlusIcon size={32} round />
                </GooglePlusShareButton>
              </div>
            </div>
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
  publishedAt: PropTypes.string
};

Articles.defaultProps = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
  author: PropTypes.string,
  publishedAt: PropTypes.string
};
