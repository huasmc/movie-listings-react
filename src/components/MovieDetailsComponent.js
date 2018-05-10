import React from 'react';

class MovieDetailsComponent extends React.Component {

  render() {
    let actors;
    let awards;
    let poster;
    if(this.props.movie !== undefined) {
      actors = this.props.movie.Actors;
      awards = this.props.movie.Awards;
      poster = this.props.movie.Poster;
    }
    return(
      <div className="movie-details-container">
        <div>
          <img src={poster}/>
          <p>{ awards }</p>
          <p>{ actors }</p>
        </div>
      </div>
    );
  }
}

export default MovieDetailsComponent;
