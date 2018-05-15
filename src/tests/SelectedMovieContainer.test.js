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

it('should render div search-details-container with style prop', () => {
  const wrapper = shallow(<SelectedMovieContainer />);
  const div = wrapper.find('.search-details-container');
  const actual = div.prop('style');
  expect(actual.width).toEqual(0);
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

it('should have width state of 0', () => {
  const wrapper = mount(<SelectedMovieContainer />);
  const width = wrapper.state().width;
  expect(width.toFixed(0)).toEqual("0");
});

it('should getStyle()', () => {
  const wrapper = shallow(<SelectedMovieContainer />);
  const inst = wrapper.instance();
  const actual = inst.getStyle()
  const expected = {width: 0}
  expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
})

it('should render MovieDetailsComponent with movie prop', () => {
  const wrapper = shallow(<SelectedMovieContainer movie=""/>);
  const container = wrapper.find('MovieDetailsComponent');
  const prop = container.props().movie;
  expect(prop).toEqual("")
});

it('should pass collapse function as prop to MovieDetailsComponent', () => {
  const wrapper = shallow(<SelectedMovieContainer />);
  const container = wrapper.find('MovieDetailsComponent');
  const inst = wrapper.instance();
  const prop = container.props().collapse;
  expect(JSON.stringify(prop)).toEqual(JSON.stringify(inst.collapse));
});

it('should pass updateSearch to SearchContainer as prop', () => {
  const wrapper = shallow(<SelectedMovieContainer />);
  const container = wrapper.find('SearchContainer');
  const inst = wrapper.instance();
  const prop = container.props();
  expect(JSON.stringify(prop)).toEqual(JSON.stringify(inst.collapse));
});

it('should pass updateSearch to SearchContainer as prop', () => {
  const wrapper = shallow(<SelectedMovieContainer updateSearch=""/>);
  const container = wrapper.find('SearchContainer');
  const prop = container.props().updateSearch;
  // console.log(JSON.stringify(prop));
  expect(prop).toEqual("")
});

it('should match the snapshot', () => {
  const component = renderer.create(<SelectedMovieContainer />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
