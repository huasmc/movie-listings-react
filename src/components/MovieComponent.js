import React from 'react';
import PreviewInfoComponent from './PreviewInfoComponent'

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
      <PreviewInfoComponent movie={ this.props.movie }/>
      </div>
    );
  }
}

export default MovieComponent;
