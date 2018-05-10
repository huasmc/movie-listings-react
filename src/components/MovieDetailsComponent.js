import React from 'react';
import axios from 'axios';

class MovieDetailsComponent extends React.Component {

  render() {
    let actors;
    let awards;
    if(this.props.movie != undefined) {
      actors = this.props.movie.Actors;
      awards = this.props.movie.Awards;
    }
    return(
      <div className="movie-details-container">
        <p>{ awards }</p>
        <p>{ actors }</p>
      </div>
    );
  }
}

export default MovieDetailsComponent;
