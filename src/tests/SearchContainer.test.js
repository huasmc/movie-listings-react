import React from 'react';
import SearchContainer from '../containers/SearchContainer'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<SearchContainer />);
});

it('should render InputContainer', () => {
  const wrapper = mount(<SearchContainer />);
  const container = wrapper.find('InputContainer');
  expect(container.length).toEqual(1);
});

it('should render InputContainer with collapse prop', () => {
  const wrapper = mount(<SearchContainer collapse=""/>);
  const container = wrapper.find('InputContainer');
  expect(container.prop("collapse")).toEqual("");
});

it('should render InputContainer with updateSearch prop', () => {
  const wrapper = mount(<SearchContainer updateSearch=""/>);
  const container = wrapper.find('InputContainer');
  expect(container.prop("updateSearch")).toEqual("");
});

xit('should render GenreListContainer', () => {
  const wrapper = mount(<SearchContainer />);
  const container = wrapper.find('GenreListContainer');
  expect(container.length).toEqual(1);
});

it('should match the snapshot', () => {
  const component = renderer.create(<SearchContainer />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
