import React from 'react';
import MovieDetailsComponent from '../components/MovieDetailsComponent'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<MovieDetailsComponent />);
});

it('should render two divs', () => {
  const wrapper = shallow(<MovieDetailsComponent />);
  const div = wrapper.find('div')
  expect(div.length).toEqual(2);
});

it('should have a div with movie-details-container selector', () => {
  const wrapper = shallow(<MovieDetailsComponent />);
  const div = wrapper.find('.movie-details-container')
  expect(div.length).toEqual(1);
});

it('should render div tag with specified css selector', () => {
  const wrapper = shallow(<MovieDetailsComponent />);
  const div = wrapper.find('.selected-image-container');
  expect(div.length).toEqual(1);
});

it('should render 5 p tags', () => {
  const wrapper = shallow(<MovieDetailsComponent />);
  const p = wrapper.find('p');
  expect(p.length).toEqual(5);
});

it('should render first text awards', () => {
  const wrapper = shallow(<MovieDetailsComponent />);
  const p = wrapper.find('p').at(0);
  expect(p.text()).toEqual('Awards: ');
});

it('should render second text actors', () => {
  const wrapper = shallow(<MovieDetailsComponent />);
  const p = wrapper.find('p').at(1);
  expect(p.text()).toEqual('Actors: ');
});

it('should render third text year', () => {
  const wrapper = shallow(<MovieDetailsComponent />);
  const p = wrapper.find('p').at(2);
  expect(p.text()).toEqual('Year: ');
});

it('should render fourth text runtime', () => {
  const wrapper = shallow(<MovieDetailsComponent />);
  const p = wrapper.find('p').at(3);
  expect(p.text()).toEqual('Runtime: ');
});

it('should render fifth text rating', () => {
  const wrapper = shallow(<MovieDetailsComponent />);
  const p = wrapper.find('p').at(4);
  expect(p.text()).toEqual('Rating: ');
});
