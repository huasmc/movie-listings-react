import React from 'react';
import axios from 'axios'
import MovieComponent from '../components/MovieComponent'

class MovieListContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      movies: []
    }
  }

  componentWillReceiveProps() {
    this.getMovies(this.props.searchParams)
  }


  getMovies(params) {
    axios.get(`http://www.omdbapi.com/?apikey=b4b1f175&s=${params}`)
    .then((response) => {
      console.log(response);
      this.setMovies(response.data.Search)
    })
    .catch(function (error) {
      // console.log(error);
    })
  }

  setMovies(movies) {
    this.setState({
      movies: movies
    })
  }

  render() {
    () => this.getMovies(this.props.searchParams)
    let movieComponents;
    const { movies } = this.state;
    if(movies.length !== 0) {
      movieComponents = this.state.movies.map((movie, i) => (<MovieComponent movie={movie} key={i}/>))
    }
    return(
      <div className="movie-list-wrapper">
        <div className="movie-list-container">
          { movieComponents }
        </div>
      </div>
    );
  }
}

export default MovieListContainer;
