import React from 'react';
import MovieListContainer from '../containers/MovieListContainer'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<MovieListContainer />);
});

it('should have movies state', () => {
  const wrapper = shallow(<MovieListContainer />);
  const movies = wrapper.state().movies;
  expect(movies).toEqual([]);
});

it('should render div with movie-list-wrapper selector', () => {
  const wrapper = shallow(<MovieListContainer />);
  const div = wrapper.find('.movie-list-wrapper')
  expect(div.length).toEqual(1);
});

it('should render div with movie-list-container selector', () => {
  const wrapper = shallow(<MovieListContainer />);
  const div = wrapper.find('.movie-list-container')
  expect(div.length).toEqual(1);
});
