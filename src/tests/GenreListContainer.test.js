import React from 'react';
import GenreListContainer from '../containers/GenreListContainer'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<GenreListContainer />);
});

it('should render div with genre-container class', () => {
  const wrapper = shallow(<GenreListContainer />);
  const div = wrapper.find('.genre-container')
  expect(div.length).toEqual(1);
})
