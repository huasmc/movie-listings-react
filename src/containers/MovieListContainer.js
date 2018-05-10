import React from 'react';
import axios from 'axios'

class MovieListContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    this.getMovies('comedy')
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
    return(
      <div className="movie-list-wrapper">
        <div className="movie-list-container">

        </div>
      </div>
    );
  }
}

export default MovieListContainer;
