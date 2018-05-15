import React from 'react';
import PreviewInfoComponent from '../components/PreviewInfoComponent'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

var movie = '{"Title":"movie", "Type":"comedy", "Year":"1994"}'
var parsedMovie = JSON.parse(movie);

it('should render without crashing', () => {
  shallow(<PreviewInfoComponent />);
});

it('should render div with preview-info-container class', () => {
  const wrapper = shallow(<PreviewInfoComponent/>);
  const div = wrapper.find('.preview-info-container')
  expect(div.length).toEqual(1);
});

it('should render div with preview-info class', () => {
  const wrapper = shallow(<PreviewInfoComponent/>);
  const div = wrapper.find('.preview-info')
  expect(div.length).toEqual(1);
});

it('should render ul tags', () => {
  const wrapper = shallow(<PreviewInfoComponent/>);
  const ul = wrapper.find('ul')
  expect(ul.length).toEqual(1);
});

it('should render three li tags', () => {
  const wrapper = shallow(<PreviewInfoComponent/>);
  const li = wrapper.find('li')
  expect(li.length).toEqual(3);
});

it('should render a li tag with class movie-type', () => {
  const wrapper = shallow(<PreviewInfoComponent/>);
  const li = wrapper.find('.movie-type')
  expect(li.length).toEqual(1);
});

it('should render a li tag with class movie-title', () => {
  const wrapper = shallow(<PreviewInfoComponent/>);
  const li = wrapper.find('.movie-title')
  expect(li.length).toEqual(1);
});

it('should render li tag TITLE with passed props', () => {
  const wrapper = shallow(<PreviewInfoComponent movie={parsedMovie}/>);
  const li = wrapper.find('.movie-title');
  expect(li.text()).toEqual("movie");
});

it('should render li tag TYPE with passed props', () => {
  const wrapper = shallow(<PreviewInfoComponent movie={parsedMovie}/>);
  const li = wrapper.find('.movie-type');
  expect(li.text()).toEqual("comedy");
});

it('should render li tag TYPE with passed props', () =>{
  const wrapper = shallow(<PreviewInfoComponent movie={parsedMovie}/>);
  const li = wrapper.find('li');
  expect(li.at(2).text()).toEqual("1994");
});

it('should match the snapshot', () => {
  const component = renderer.create(<PreviewInfoComponent />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
