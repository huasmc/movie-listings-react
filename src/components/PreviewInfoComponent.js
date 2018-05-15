import React from 'react';

class PreviewInfoComponent extends React.Component {

  render() {
    let type;
    let title;
    let year;
    if(this.props.movie !== undefined) {
      type = this.props.movie["Type"]
      title = this.props.movie["Title"]
      year = this.props.movie["Year"]
    }
    return(
      <div className="preview-info-container">
        <div className="preview-info">
          <ul>
            <li className="movie-type">{type}</li>
            <li className="movie-title">{title}</li>
            <li className="movie-detail">{year}</li>
          </ul>
          </div>
      </div>
    );
  }
}

export default PreviewInfoComponent;
