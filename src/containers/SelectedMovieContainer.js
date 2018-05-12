import React from 'react';
import MovieDetailsComponent from '../components/MovieDetailsComponent'
import SearchContainer from './SearchContainer.js'

class SelectedMovieContainer extends React.Component {

  render() {
    return(
      <div className="search-details-container">
        <MovieDetailsComponent movie={ this.props.movie }/>
        <SearchContainer updateSearch={ this.props.updateSearch }/>
      </div>
    );
  }
}

export default SelectedMovieContainer;
