import React from "react";

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
      <a href={url} target="_blank">
        <article className="article-row">
          <div classclassName="article-row-img">
            <img src={urlToImage} alt="picture of a whale eating a donkey" />
          </div>
          <div classclassName="article-row-content">
            <h1 classclassName="article-row-content-header">{title}</h1>

            <p classclassName="article-row-content-description">
              {description}
            </p>

            <p classclassName="article-row-content-author">{author}</p>
            <time classclassName="article-row-content-time" dateTime={true}>
              {publishedAt}
            </time>
          </div>
        </article>
      </a>
    );
  }
}
