import React from 'react';
import { connect } from 'react-redux';
import { fetchAllArticles } from '../action/fluxActions';
import { NewsHome } from './NewsHome';
import ArticlesStore from '../store/ArticlesStore';


export class HeadlineItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleCheckbox = this.handleCheckbox.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const { Top } = this.refs;
    const { dispatch, urlText, onClickURL, id } = this.props;
    // const urlText = this.props.url;
    // dispatch(fetchAllArticles(id.toLowerCase(), false));
    //fetchAllArticles(id.toLowerCase(), false);
    // ArticlesStore.on('change', new NewsHome().getArticles);
    new NewsHome().handleGetArticles(id.toLowerCase(), false);
    if (Top.checked) {
      Top.checked = false;
    }
  }

  handleCheckbox() {
    const { Top } = this.refs;
    const { dispatch, id } = this.props;
    if (Top.checked) {
      // dispatch(fetchAllArticles(id.toLowerCase(), Top.checked));
      new NewsHome().handleGetArticles(id.toLowerCase(), Top.checked);
    } else if (!Top.checked) {
      // dispatch(fetchAllArticles(id.toLowerCase(), Top.checked));
      new NewsHome().handleGetArticles(id.toLowerCase(), Top.checked);
    }
  }


  render() {
    const { name, description, url, dispatch, showLatest } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h4>{name}</h4>
          <p>{description}.</p>
          <button className="button" >View Articles</button>
          <label hidden={showLatest}>
            <input type="checkbox" ref="Top" onChange={this.handleCheckbox} hidden={showLatest} />
            Latest Headlines
          </label>
        </form>
      </div>
    );
  }

}
export default connect()(HeadlineItem);
