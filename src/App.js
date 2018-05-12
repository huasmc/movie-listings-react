import React, { Component } from 'react';
import MovieListContainer from './containers/MovieListContainer.js'
import SearchContainer from './containers/SearchContainer.js'
import MovieDetailsComponent from './components/MovieDetailsComponent'
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchParams: "pirates",
      currentMovie: undefined,
      hiddenState: false
    }
    this.updateSearch.bind(this)
    this.updateCurrentMovie.bind(this)
  }

  toggleHidden() {
     this.state.hiddenState ? this.updateHiddenState(false) : this.updateHiddenState(true)
  }

  updateHiddenState(boolean) {
    this.setState({
      hiddenState: boolean
    })
  }

  updateSearch(args) {
    this.setState({
      searchParams: args
    })
    this.forceUpdate()
  }

  updateCurrentMovie(args) {
      axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${args}`)
      .then((response) => {
        console.log(response);
        this.setState({
          currentMovie: response.data
        })
      })
      .catch(function (error) {
        // console.log(error);
    })
  }

  render() {
    return (
      <div className="App">
        <MovieListContainer searchParams={ this.state.searchParams } updateCurrentMovie={ this.updateCurrentMovie.bind(this) }/>
        <div className="search-details-container">
          <MovieDetailsComponent movie={ this.state.currentMovie }/>
          <SearchContainer updateSearch={this.updateSearch.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
