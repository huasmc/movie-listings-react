import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

xit('should render MovieListContainer', () => {
  const wrapper = mount(<App />);
  const container = wrapper.find('MovieListContainer')
  expect(container.length).toEqual(1);
});
