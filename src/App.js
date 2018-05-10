import React, { Component } from 'react';
import MovieListContainer from './containers/MovieListContainer.js'
import SearchContainer from './containers/SearchContainer.js'

class App extends Component {
  render() {
    return (
      <div>
        <MovieListContainer />
        <SearchContainer />
      </div>
    );
  }
}

export default App;
