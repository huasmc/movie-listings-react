import React from 'react';
import GenreListContainer from './GenreListContainer'
import InputContainer from './InputContainer'

class SearchContainer extends React.Component {

  render() {
    return(
      <div className="search-wrapper">
        <InputContainer updateSearch={this.props.updateSearch}/>
        <GenreListContainer updateSearch={ this.props.updateSearch } />
      </div>
    );
  }
}

export default SearchContainer;
