import React from 'react';

class MovieComponent extends React.Component {

  render() {
    let poster;
    if(this.props.movie !== undefined) {
      poster = this.props.movie["Poster"]
    } else {
      poster = ""
    }

    return(
      <div className="movie-component" style={{backgroundImage: `url(${poster})`}}>
        {"-"}
      </div>
    );
  }
}

export default MovieComponent;
