import React from 'react';

class PreviewInfoComponent extends React.Component {

  render() {
    let type;
    let title;
    if(this.props.movie !== undefined) {
      type = this.props.movie["Type"]
      title = this.props.movie["Title"]
    } else {
      type = ""
      title = ""
    }
    return(
      <div className="preview-info">
        <ul>
          <li className="movie-type">{type}</li>
          <li className="movie-title">{title}</li>
        </ul>
      </div>
    );
  }
}

export default PreviewInfoComponent;
