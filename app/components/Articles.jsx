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

      <div className="card news-card">
        <img src={urlToImage} />
        <div className="card-section">
          <div className="news-card-date"><time datetime = {publishedAt} ></time></div>
          <article className="news-card-article">
            <h4 className="news-card-title">
              <a href={url}>{title}</a>
            </h4>
            <p className="news-card-description">
              {description}
            </p>
          </article>

          <div className="news-card-author">

            <div className="news-card-author-name">
              By {author}
            </div>
          </div>
        </div>
      </div>



    );
  }
}

//
// <a href={url} target="_blank">
//   <article className="article-row">
//     <div className="article-row-img">
//       <img src={urlToImage} alt="picture of a whale eating a donkey" />
//     </div>
//     <div className="article-row-content">
//       <h1 className="article-row-content-header">{title}</h1>
//
//       <p className="article-row-content-description">
//         {description}
//       </p>
//
//       <p className="article-row-content-author">{author}</p>
//       <time className="article-row-content-time" dateTime={true}>
//         {publishedAt}
//       </time>
//     </div>
//   </article>
// </a>

//__________-----------_
// <div className="card news-card">
//   <img src={urlToImage} />
//   <div className="card-section">
//     <div className="news-card-date">{publishedAt}</div>
//     <article className="news-card-article">
//       <h4 className="news-card-title">
//         <a href="#">5 Features To Watch Out For in Angular v4</a>
//       </h4>
//       <p className="news-card-description">
//         {description}
//       </p>
//     </article>
//
//     <div className="news-card-author">
//       <div className="news-card-author-image">
//         <img src="http://i.imgur.com/lAMD2kS.jpg" alt="user" />
//       </div>
//       <div className="news-card-author-name">
//         By <a href="#">{author}</a>
//       </div>
//     </div>
//   </div>
// </div>


/////================///////

//       <div className="responsive-blog-post">
//   <div className="individual-post">
//     <h4>Title of Blog</h4>
//     <p className="date">Date</p>
//     <img src="http://placehold.it/1200x650" />
//     <p> First few sentences of blog post show here and then eventually cuts out. First few sentences of blog post show here and then eventually cuts out. First few sentences of blog post show here and then eventually cuts out...</p>
//     <a className="button" href="#">Read On</a>
//   </div>
// </div>
