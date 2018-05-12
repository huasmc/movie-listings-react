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

xit('should render div search-details-container with style prop', () => {
  const wrapper = shallow(<SelectedMovieContainer />);
  const div = wrapper.find('.search-details-container')
  expect(div.prop('style').length > 1).toEqual("true");
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
  expect(width).toEqual(0);
});

it('should have getStyle()', () => {
  const wrapper = shallow(<SelectedMovieContainer />);
  const inst = wrapper.instance();
  const actual = inst.getStyle()
  const expected = {width: this.state.width}
  expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
})

xit('should render MovieDetailsComponent wiht movie prop', () => {
  const wrapper = shallow(<SelectedMovieContainer />);
  const container = wrapper.find('MovieDetailsComponent');
  const prop = container.props();
  // console.log(JSON.stringify(prop));
  expect(prop.exists()).toEqual('true')
});

xit('should pass updateSearch to SearchContainer as prop', () => {
  const wrapper = shallow(<SelectedMovieContainer />);
  const container = wrapper.find('MovieDetailsComponent');
  const prop = container.props();
  // console.log(JSON.stringify(prop));
  expect(prop.exists()).toEqual('true')
});

xit('should match the snapshot', () => {
  const component = renderer.create(<SelectedImageContaine />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
