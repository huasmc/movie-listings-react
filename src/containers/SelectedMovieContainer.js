import React from 'react';
import MovieDetailsComponent from '../components/MovieDetailsComponent'
import SearchContainer from './SearchContainer.js'

class SelectedMovieContainer extends React.Component {

  render() {
    return(
      <div className="search-details-container">
        <MovieDetailsComponent />
        <SearchContainer />
      </div>
    );
  }
}

export default SelectedMovieContainer;
