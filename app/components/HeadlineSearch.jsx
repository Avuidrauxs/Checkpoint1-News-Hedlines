import React from 'react';
import { connect } from 'react-redux';
import { fetchAllArticles } from 'actions';

export class HeadlineSearch extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSearch() {
  //  const top = this.refs.Top.checked;
    const searchText = this.refs.searchText.value;

    this.props.onSearch(searchText);
    // this.props.dispatch(fetchAllArticles())
  }
  render() {
    return (
      <div className="container__header">
        <div>
          <input type="text" placeholder="Enter a news source you want" ref="searchText" onChange={this.handleSearch.bind(this)} />
        </div>
        <div />
      </div>
    );
  }

}
export default connect()(HeadlineSearch);
