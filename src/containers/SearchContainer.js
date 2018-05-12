import React from 'react';
import GenreListContainer from './GenreListContainer'
import InputContainer from './InputContainer'

class SearchContainer extends React.Component {

  render() {
    return(
      <div className="search-wrapper">
        <InputContainer updateSearch={ this.props.updateSearch } collapse={ this.props.collapse }/>
        {/* <GenreListContainer updateSearch={ this.props.updateSearch } /> */}
      </div>
    );
  }
}

export default SearchContainer;
