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

it('should have an instance', () => {
  const wrapper = shallow(<MovieListContainer />);
  const inst = wrapper.instance();
  expect(inst).toBeTruthy();
})

it('should be able to setMovies state', () => {
  const wrapper = shallow(<MovieListContainer />);
  const array = [0, 1];
  const inst = wrapper.instance();
  inst.setMovies(array);
  const actual = inst["state"]["movies"]
  expect(actual.length).toEqual(2);
})
