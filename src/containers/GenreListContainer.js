import React from 'react';
import GenreComponent from '../components/GenreComponent'

class GenreListContainer extends React.Component {

  render() {
    return(
      <div className="genre-container">
        <GenreComponent genre={"comedy"} updateSearch={this.props.updateSearch.bind(this)} />
        <GenreComponent genre={"action"} updateSearch={this.props.updateSearch.bind(this)}/>
        <GenreComponent genre={"indie"} updateSearch={this.props.updateSearch.bind(this)}/>
      </div>
    );
  }
}

export default GenreListContainer;
