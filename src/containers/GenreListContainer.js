import React from 'react';
import GenreComponent from '../components/GenreComponent'

class GenreListContainer extends React.Component {

  render() {
    return(
      <div className="genre-container">
        <GenreComponent genre={"comedy"} updateSearch={ this.props.updateSearch } />
        <GenreComponent genre={"action"} updateSearch={ this.props.updateSearch }/>
        <GenreComponent genre={"thriller"} updateSearch={ this.props.updateSearch }/>
      </div>
    );
  }
}

export default GenreListContainer;
