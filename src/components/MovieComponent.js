import React from 'react';
import PreviewInfoComponent from './PreviewInfoComponent'

class MovieComponent extends React.Component {

  onClick(id) {
    this.props.updateCurrentMovie(id);
    this.props.toggleHidden();
  }

  render() {
    let poster;
    let id;
    if(this.props.movie !== undefined) {
      poster = this.props.movie["Poster"]
      id = this.props.movie["imdbID"]
    } else {
      poster = ""
    }
    return(
      <div className="movie-component" style={{backgroundImage: `url(${poster})`}} onClick={() => this.onClick(id)}>
        <PreviewInfoComponent movie={this.props.movie}/>
      </div>
    );
  }
}

export default MovieComponent;
