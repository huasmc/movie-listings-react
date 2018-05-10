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
        <div className="movie-list-container">
          
        </div>
      </div>
    );
  }
}

export default MovieListContainer;
