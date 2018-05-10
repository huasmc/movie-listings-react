import React, { Component } from 'react';
import MovieListContainer from './containers/MovieListContainer.js'
import SearchContainer from './containers/SearchContainer.js'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchParams: "comedy"
    }
  }

  updateSearchParams(params) {
    this.setState({
      searchParams: params
    })
  }
  render() {
    return (
      <div>
        <MovieListContainer searchParams={ this.state.searchParams }/>
        <SearchContainer />
      </div>
    );
  }
}

export default App;
