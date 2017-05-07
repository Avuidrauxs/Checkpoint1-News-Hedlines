import React from "react";

export default class Articles extends React.Component {
  render() {
    const { title, description, url } = this.props;

    return (
      <div className='column large-left small-11 medium-6 '>
        <div className=''>
          <h4>{title}</h4>
          <p>{description}.</p>
          <a className='button' href={url} target='blank'>More Info</a>
        </div>
      </div>

    );
  }
}
