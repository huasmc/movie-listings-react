import React from 'react';
import GenreListContainer from './GenreListContainer'

class SearchContainer extends React.Component {

  render() {
    return(
      <div className="search-wrapper">
        <GenreListContainer updateSearch={ this.props.updateSearch }/>
      </div>
    );
  }
}

export default SearchContainer;
