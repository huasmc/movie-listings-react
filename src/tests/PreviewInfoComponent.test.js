import React from 'react';
import PreviewInfoComponent from '../components/PreviewInfoComponent'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<PreviewInfoComponent />);
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

xit('should render li tag TITLE with passed props'), () =>{
  const wrapper = shallow(<PreviewInfoComponent/>);
  const li = wrapper.find('.movie-type')
  expect(li.length).toEqual(1);
}

xit('should render li tag TYPE with passed props'), () =>{
  const wrapper = shallow(<PreviewInfoComponent/>);
  const li = wrapper.find('.movie-type')
  expect(li.length).toEqual(1);
}
