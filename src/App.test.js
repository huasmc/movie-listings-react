import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render MovieListContainer', () => {
  const wrapper = mount(<App />);
  const container = wrapper.find('MovieListContainer')
  expect(container.length).toEqual(1);
});

it('should be able to update searchParams', () => {
  const wrapper = mount(<App />);
  const inst = wrapper.instance();
  inst.updateSearch('action');
  const actual = inst.state.searchParams;
  expect(actual).toEqual('action');
});

xit('should be able to update current movie state', () => {
  const wrapper = mount(<App />);
  const inst = wrapper.instance();
  inst.updateCurrentMovie('movie');
  const actual = inst.state.currentMovie;
  expect(actual).toEqual('movie');
});
