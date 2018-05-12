import React from 'react';

class MovieDetailsComponent extends React.Component {

  render() {
    let actors;
    let awards;
    let poster;
    let year;
    let runtime;
    let rating;
    if(this.props.movie !== undefined) {
      actors = this.props.movie.Actors;
      awards = this.props.movie.Awards;
      poster = this.props.movie.Poster;
      year = this.props.movie.Year;
      runtime = this.props.movie.Runtime;
      rating = this.props.movie.imdbRating;
    }
    return(
      <div className="movie-details-container" onClick={() => this.props.collapse()}>
          <div className="selected-image-container" style={{backgroundImage: `url(${poster})`}}>
            <div className="movie-data-container">
              {/* <p>Awards: { awards }</p> */}
              {/* <p>Actors: { actors }</p> */}
              <p>Year: { year }</p>
              <p>Runtime: { runtime }</p>
              <p>Rating: { rating }</p>
            </div>
          </div>
      </div>
    );
  }
}

export default MovieDetailsComponent;
