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
});

it('should render three GenreComponent', () => {
  const wrapper = mount(<GenreListContainer />);
  const components = wrapper.find('GenreComponent')
  expect(components.length).toEqual(3);
});

it('should render GenreComponent with genre prop comedy', () => {
  const wrapper = mount(<GenreListContainer />);
  const component = wrapper.find('GenreComponent').at(0)
  expect(component.prop('genre')).toEqual('comedy');
});

it('should render GenreComponent with genre prop action', () => {
  const wrapper = mount(<GenreListContainer />);
  const component = wrapper.find('GenreComponent').at(1)
  expect(component.prop('genre')).toEqual('action');
});

it('should render GenreComponent with genre prop thriller', () => {
  const wrapper = mount(<GenreListContainer />);
  const component = wrapper.find('GenreComponent').at(2)
  expect(component.prop('genre')).toEqual('thriller');
});

xit('should render comedy GenreComponent with updateSearch prop', () => {
  const wrapper = mount(<GenreListContainer />);
  const component = wrapper.find('GenreComponent').at(0)
  expect(component.prop('updateSearch').length).toEqual(1);
});

xit('should render action GenreComponent with updateSearch prop', () => {
  const wrapper = mount(<GenreListContainer />);
  const component = wrapper.find('GenreComponent').at(1)
  expect(component.prop('updateSearch').length).toEqual(1);
});

xit('should render thriller GenreComponent with updateSearch prop', () => {
  const wrapper = mount(<GenreListContainer />);
  const component = wrapper.find('GenreComponent').at(2)
  expect(component.prop('updateSearch').length).toEqual(1);
});
