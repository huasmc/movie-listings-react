import React from 'react';
import SelectedMovieContainer from '../containers/SelectedMovieContainer'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<SelectedMovieContainer />);
});

it('should render div with search-details-container class', () => {
  const wrapper = shallow(<SelectedMovieContainer />);
  const div = wrapper.find('.search-details-container')
  expect(div.length).toEqual(1);
});

it('should render MovieDetailsComponent', () => {
  const wrapper = shallow(<SelectedMovieContainer />);
  const container = wrapper.find('MovieDetailsComponent');
  expect(container.length).toEqual(1);
});

it('should render SearchContainer', () => {
  const wrapper = shallow(<SelectedMovieContainer />);
  const container = wrapper.find('SearchContainer');
  expect(container.length).toEqual(1);
});

xit('should match the snapshot', () => {
  const component = renderer.create(<SelectedImageContaine />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
