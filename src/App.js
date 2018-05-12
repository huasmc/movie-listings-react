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
      stateHidden: false
    }
    this.updateSearch.bind(this)
    this.updateCurrentMovie.bind(this)
    this.toggleHidden.bind(this)
  }

  updateSearch(args) {
    this.setState({
      searchParams: args
    })
    this.forceUpdate()
    console.log(args);
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

  toggleHidden() {
    this.state.stateHidden ? this.setHidden(false) : this.setHidden(true)
  }

  setHidden(args) {
    this.setState({
      stateHidden: args
    })
  }



  render() {
    return (
      <div className="App">
        <MovieListContainer searchParams={ this.state.searchParams } toggleHidden={this.toggleHidden.bind(this) } updateCurrentMovie={ this.updateCurrentMovie.bind(this) }/>
        {this.state.stateHidden &&
          <div className="select-search">
          <MovieDetailsComponent movie={ this.state.currentMovie }/>
          <SearchContainer updateSearch={this.updateSearch.bind(this)}/>
        </div>
        }
      </div>
    );
  }
}

export default App;
