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

it('should have a searchParams state equal to string `pirates`', () => {
  const wrapper = shallow(<App />);
  const actual = wrapper.state().searchParams;
  expect(actual).toEqual('pirates');
});

it('should have a currentMovie state of undefined', () => {
  const wrapper = shallow(<App />);
  const actual = wrapper.state().currentMovie;
  expect(actual).toEqual(undefined);
});

it('should be able to update searchParams', () => {
  const wrapper = mount(<App />);
  const inst = wrapper.instance();
  inst.updateSearch('action');
  const actual = inst.state.searchParams;
  expect(actual).toEqual('action');
});

it('should have a hiddenState of false', () => {
  const wrapper = shallow(<App />);
  const actual = wrapper.state().hiddenState;
  expect(actual).toEqual(false);
});

it('should be able to toggle the hiddenState', () => {
  const wrapper = shallow(<App />);
  const inst = wrapper.instance();
  inst.toggleHidden();
  const actual = wrapper.state().hiddenState;
  expect(actual).toEqual(true);
})

xit('should be able to update current movie state', () => {
  const wrapper = mount(<App />);
  const inst = wrapper.instance();
  inst.updateCurrentMovie('movie');
  const actual = inst.state.currentMovie;
  expect(actual).toEqual('movie');
});
