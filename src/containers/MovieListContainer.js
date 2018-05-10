import React from 'react';

class MovieListContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      movies: []
    }
  }

  render() {
    return(
      <div className="movie-list-wrapper">
    </div>
    );
  }
}

export default MovieListContainer;
