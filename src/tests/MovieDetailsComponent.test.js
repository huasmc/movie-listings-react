import React from 'react';
import MovieDetailsComponent from '../components/MovieDetailsComponent'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<MovieDetailsComponent />);
});

it('should have a div with movie-details-container selector', () => {
  const wrapper = shallow(<MovieDetailsComponent />);
  const div = wrapper.find('.movie-details-container')
  expect(div.length).toEqual(1);
});
