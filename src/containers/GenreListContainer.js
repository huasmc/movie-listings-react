import React from 'react';
import GenreComponent from '../components/GenreComponent'

class GenreListContainer extends React.Component {

  render() {
    return(
      <div>
        <p className="to-be-removed">double-click genre</p>

      <div className="genre-container">
        <GenreComponent genre={"comedy"} updateSearch={ this.props.updateSearch } />
        <GenreComponent genre={"action"} updateSearch={ this.props.updateSearch }/>
        <GenreComponent genre={"thriller"} updateSearch={ this.props.updateSearch }/>
      </div>
      </div>
    );
  }
}

export default GenreListContainer;
