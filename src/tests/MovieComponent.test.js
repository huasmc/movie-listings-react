import React from 'react';
import MovieComponent from '../components/MovieComponent'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import axios from 'axios';

it('should render without crashing', () => {
  shallow(<MovieComponent />);
});

it('should render div with movie-component class', () => {
  const wrapper = shallow(<MovieComponent />);
  const div = wrapper.find('.movie-component')
  expect(div.length).toEqual(1);
});

it('should have div with style backgroundImage property', () => {
  const wrapper = shallow(<MovieComponent />);
  const div = wrapper.find('.movie-component');
  expect(div.prop('style'));
});

it('should have div with style prop', () => {
  const wrapper = shallow(<MovieComponent />);
  const div = wrapper.find('.movie-component')
  const expected = JSON.stringify({"backgroundImage": "url()"})
  expect(JSON.stringify(div.prop('style'))).toEqual(expected);
});

it('should render PreviewInfoComponent', () => {
  const wrapper = mount(<MovieComponent />);
  const component = wrapper.find('PreviewInfoComponent')
  expect(component.length).toEqual(1);
});

xit('should render movie-component div with onClick prop', () => {
  const wrapper = shallow(<MovieComponent />);
  const div = wrapper.find('.movie-component');
  const actual = div.prop('onClick');
  expect(actual.exists()).toEqual(true);
});

xit('should have an onClick function', () => {
  const wrapper = shallow(<MovieComponent />);
  const inst = wrapper.instance();
  const actual = inst.onClick()
  expect(actual).toEqual(true);
})

xit('should render PreviewInfoComponent with movie prop', () => {
  const wrapper = mount(<MovieComponent />);
  const component = wrapper.find('PreviewInfoComponent')
  expect(component.prop('movie')).toEqual('movie');
});

it('should match the snapshot', () => {
  const component = renderer.create(<MovieComponent />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
