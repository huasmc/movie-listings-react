import React from 'react';
import MovieDetailsComponent from '../components/MovieDetailsComponent'
import SearchContainer from './SearchContainer.js'
import ReactStateAnimation from 'react-state-animation'

class SelectedMovieContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0
    }
    this._animate = new ReactStateAnimation(this)
  }

  componentDidMount() {
    this.start();
  }

  onClick() {
    this._animate.cubicOut('width', 0, 500);
  }

  start() {
    this._animate.cubicIn('width', 100000, 1500)
  }

  stop() {
      this._animate.stop()
  }

  getStyle() {
    return {
      width: this.state.width,
    }
  }

  render() {
    return(
      <div className="search-details-container" style={ this.getStyle() } onClick={() => this.onClick() }>
        <MovieDetailsComponent movie={ this.props.movie }/>
        <SearchContainer updateSearch={ this.props.updateSearch }/>
      </div>
    );
  }
}

export default SelectedMovieContainer;
