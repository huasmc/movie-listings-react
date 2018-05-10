import React from 'react';
import axios from 'axios'

class MovieComponent extends React.Component {

  render() {
    return(
      <div className="movie-component" style={{backgroundImage: `url(${this.props.movie["Poster"]})`}}>
      </div>
    );
  }
}

export default MovieComponent;
