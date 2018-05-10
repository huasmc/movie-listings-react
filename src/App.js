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

  updateSearchParams(args) {
    console.log(args);
    this.setState({
      searchParams: args
    })
  }

  render() {
    return (
      <div>
        <MovieListContainer searchParams={ this.state.searchParams }/>
        <SearchContainer updateSearch={ () => this.updateSearchParams.bind(this) }/>
      </div>
    );
  }
}

export default App;
