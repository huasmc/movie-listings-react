import React, { Component } from 'react';
import MovieListContainer from './containers/MovieListContainer.js'
import SearchContainer from './containers/SearchContainer.js'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchParams: "comedy"
    }
    this.updateSearch.bind(this)
  }

  updateSearch(args) {
    this.setState({
      searchParams: args
    })
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <MovieListContainer searchParams={ this.state.searchParams }/>
        <SearchContainer updateSearch={this.updateSearch.bind(this)}/>
      </div>
    );
  }
}

export default App;
