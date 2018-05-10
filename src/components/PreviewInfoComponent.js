import React from 'react';

class PreviewInfoComponent extends React.Component {

  render() {
    return(
      <div className="preview-info">
        <ul>
          <li className="movie-type"></li>
          <li className="movie-title"></li>
        </ul>
      </div>
    );
  }
}

export default PreviewInfoComponent;
