import React from 'react';
import noImage from '../images/no-image-placeholder.png';

export default class Articles extends React.Component {
  render() {
    const {
      title,
      description,
      url,
      urlToImage,
      author,
      publishedAt
    } = this.props;

    return (

      <div className="card news-card">
        <div className="news-card-img">
            <img src={!urlToImage ? noImage : urlToImage} alt="No Image available" />
        </div>
        <div className="card-section">
          <div className="news-card-date">{ publishedAt ? publishedAt.split('T')[0] : '' }</div>
          <article className="news-card-article">
            <h4 className="news-card-title">
              <a href={url} target="_blank">{title}</a>
            </h4>
            <p className="news-card-description">
              {description}
            </p>
          </article>
          <div className="news-card-author">

            <div className="news-card-author-name">
              By {!author ? 'Anonnymous' : author }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
