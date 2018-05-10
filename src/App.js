import React, { Component } from 'react';
import MovieListContainer from './containers/MovieListContainer.js'
import SearchContainer from './containers/SearchContainer.js'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchParams: "pirates",
      currentMovieID: undefined
    }
    this.updateSearch.bind(this)
    this.updateCurrentMovie.bind(this)
  }

  updateSearch(args) {
    this.setState({
      searchParams: args
    })
    this.forceUpdate()
    console.log(args);
  }

  updateCurrentMovie(args) {
    this.setState({
      currentMovie: args
    })
    console.log(args);
  }

  render() {
    return (
      <div>
        {/* <MovieDetailsComponent movie={ this.state.currentMovie }/> */}
        <MovieListContainer searchParams={ this.state.searchParams } updateCurrentMovie={ this.updateCurrentMovie.bind(this) }/>
        <SearchContainer updateSearch={this.updateSearch.bind(this)}/>
      </div>
    );
  }
}

export default App;
