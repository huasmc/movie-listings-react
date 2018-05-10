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

  componentDidMount() {
    this.getMovies(this.props.searchParams)
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
    let movieComponents;
    const { movies } = this.state;
    if(movies.length !== 0 || movies !== undefined) {
      movieComponents = this.state.movies.map((movie, i) => (<MovieComponent movie={movie} key={i} updateCurrentMovie={this.props.updateCurrentMovie}/>))
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
