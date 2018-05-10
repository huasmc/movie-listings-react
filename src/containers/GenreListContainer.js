import React from 'react';
import GenreComponent from '../components/GenreComponent'

class GenreListContainer extends React.Component {

  render() {
    return(
      <div className="genre-container">
        <GenreComponent genre={"comedy"} />
        <GenreComponent genre={"action"} />
        <GenreComponent genre={"indie"} />
      </div>
    );
  }
}

export default GenreListContainer;
