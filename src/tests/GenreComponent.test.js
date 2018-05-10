import React from 'react';
import GenreComponent from '../components/GenreComponent'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<GenreComponent />);
});

it('should render div with class genre-component', () => {
  const wrapper = shallow(<GenreComponent />);
  const div = wrapper.find('.genre-component')
  expect(div.length).toEqual(1);
});

it('should match the snapshot', () => {
  const component = renderer.create(<GenreComponent />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
