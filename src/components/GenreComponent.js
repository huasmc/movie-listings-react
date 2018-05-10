import React from 'react';

class GenreComponent extends React.Component {

  render() {
    return(
      <div className="genre-component">
        <p>{ this.props.genre }</p>
      </div>
    );
  }
}

export default GenreComponent;
