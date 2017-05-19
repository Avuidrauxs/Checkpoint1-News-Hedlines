import React from 'react';
import { connect } from 'react-redux';
import { fetchAllArticles } from 'actions';

export class HeadlineItem extends React.Component {

  constructor(props) {
    super(props);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { Top } = this.refs;
    const { dispatch, urlText, onClickURL, id } = this.props;
    // const urlText = this.props.url;
    dispatch(fetchAllArticles(id.toLowerCase(), false));
    if (Top.checked) {
      Top.checked = false;
    }

    onClickURL(id);
  }

  handleCheckbox() {
    const { Top } = this.refs;
    const { dispatch, id } = this.props;
    if (Top.checked) {
      dispatch(fetchAllArticles(id.toLowerCase(), Top.checked));
    } else if (!Top.checked) {
      dispatch(fetchAllArticles(id.toLowerCase(), Top.checked));
    }
  }


  render() {
    const { name, description, url, dispatch, showLatest } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h4>{name}</h4>
          <p>{description}.</p>
          <button className="button" >Read More</button>
          <label hidden={showLatest}>
            <input type="checkbox" ref="Top" onChange={this.handleCheckbox.bind(this)} hidden={showLatest} />
            Latest Headlines
          </label>
        </form>
      </div>
    );
  }

}
export default connect()(HeadlineItem);
