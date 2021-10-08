import React, { Component } from 'react';

import Logo from "./logo"
import SearchBar from "./searchBar";
import RecentPosts from './recent-posts';
// import ResultsPosts from './results-post';

import { connect } from 'react-redux';
import * as actions from "../actions";

class Home extends Component {

  handleSearchBarSubmit(query) {
    this.props.fetchPostsWithQuery(query, () => {
      this.props.history.push('/results');
    });
      
   }


  render() {
    return (
      <div className="home">
        <Logo/>
        <SearchBar page="home" onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
        <RecentPosts />
      </div>
    );
  }
}
//the handleFormSubmit(query) function is implemented here as a prop (property) of <Search /> after being imported from "./search"

export default connect(null, actions)(Home);