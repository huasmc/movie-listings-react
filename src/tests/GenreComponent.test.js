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

xit('should have p tag with onClick prop', () => {
  const wrapper = shallow(<GenreComponent />);
  const p = wrapper.find('p');
  expect(p.prop('onClick')).exists().toEqual(true);
});

it('should render genre passed by props', () => {
  const wrapper = shallow(<GenreComponent genre={ "comedy" }/>);
  const p = wrapper.find('p');
  expect(p.text()).toEqual('comedy');
});
