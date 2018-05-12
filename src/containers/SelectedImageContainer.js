import React from 'react';
import MovieDetailsComponent from '../components/MovieDetailsComponent'

class SelectedImageContainer extends React.Component {

  render() {
    return(
      <div className="search-details-container">
        <MovieDetailsComponent />
      </div>
    );
  }
}

export default SelectedImageContainer;
