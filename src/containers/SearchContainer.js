import React from 'react';
import GenreListContainer from './GenreListContainer'

class SearchContainer extends React.Component {

  render() {
    return(
      <div className="search-wrapper">
        <GenreListContainer />
      </div>
    );
  }
}

export default SearchContainer;
