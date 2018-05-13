import React from 'react';
import MovieDetailsComponent from '../components/MovieDetailsComponent'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<MovieDetailsComponent />);
});

it('should render three divs', () => {
  const wrapper = shallow(<MovieDetailsComponent />);
  const div = wrapper.find('div')
  expect(div.length).toEqual(3);
});

it('should have a div with movie-details-container selector', () => {
  const wrapper = shallow(<MovieDetailsComponent />);
  const div = wrapper.find('.movie-details-container')
  expect(div.length).toEqual(1);
});

it('should have a div with movie-data-container selector', () => {
  const wrapper = shallow(<MovieDetailsComponent />);
  const div = wrapper.find('.movie-data-container')
  expect(div.length).toEqual(1);
});

it('should have a div with selected-image-container selector', () => {
  const wrapper = shallow(<MovieDetailsComponent />);
  const div = wrapper.find('.selected-image-container')
  expect(div.length).toEqual(1);
});

xit('should render 5 p tags', () => {
  const wrapper = shallow(<MovieDetailsComponent />);
  const p = wrapper.find('p');
  expect(p.length).toEqual(5);
});

xit('should render text awards', () => {
  const wrapper = shallow(<MovieDetailsComponent />);
  const p = wrapper.find('p').at(0);
  expect(p.text()).toEqual('Awards: ');
});

xit('should render text actors', () => {
  const wrapper = shallow(<MovieDetailsComponent />);
  const p = wrapper.find('p').at(1);
  expect(p.text()).toEqual('Actors: ');
});

it('should render text year', () => {
  const wrapper = shallow(<MovieDetailsComponent />);
  const p = wrapper.find('p').at(0);
  expect(p.text()).toEqual('Year: ');
});

it('should render text runtime', () => {
  const wrapper = shallow(<MovieDetailsComponent />);
  const p = wrapper.find('p').at(1);
  expect(p.text()).toEqual('Runtime: ');
});

it('should render text rating', () => {
  const wrapper = shallow(<MovieDetailsComponent />);
  const p = wrapper.find('p').at(2);
  expect(p.text()).toEqual('Rating: ');
});

it('should match the snapshot', () => {
  const component = renderer.create(<MovieDetailsComponent />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
