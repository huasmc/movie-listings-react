import React from 'react';
import MovieDetailsComponent from '../components/MovieDetailsComponent'
import SearchContainer from './SearchContainer.js'
import ReactStateAnimation from 'react-state-animation'
import TimerMixin from 'react-timer-mixin';

class SelectedMovieContainer extends React.Component {
  mixins: [TimerMixin]
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

  collapse() {
    this._animate.cubicOut('width', 0, 500);
    setTimeout( () => { this.props.toggleHidden(); },600);
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
      <div className="search-details-container" style={ this.getStyle() }>
        <MovieDetailsComponent movie={ this.props.movie } collapse={ () => this.collapse() } />
        <SearchContainer updateSearch={ this.props.updateSearch } collapse={ () => this.collapse()} />
      </div>
    );
  }
}

export default SelectedMovieContainer;
