import React from 'react';
import MovieComponent from '../components/MovieComponent'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<MovieComponent />);
});

it('should render div with movie-component class', () => {
  const wrapper = shallow(<MovieComponent />);
  const div = wrapper.find('.movie-component')
  expect(div.length).toEqual(1);
});

it('should have div with style property', () => {
  const wrapper = shallow(<MovieComponent />);
  const div = wrapper.find('.movie-component')
  expect(div.prop('style')).toBeTruthy();
});
