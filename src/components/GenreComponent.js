import React from 'react';

class GenreComponent extends React.Component {

  render() {
    return(
      <div className="genre-component">
        <p onClick={() => this.props.updateSearch(this.props.genre) }>{ this.props.genre }</p>
      </div>
    );
  }
}

export default GenreComponent;
