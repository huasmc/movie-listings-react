import React from 'react';
import SelectedImageContainer from '../containers/SelectedImageContainer'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<SelectedImageContainer />);
});

it('should render div with search-details-container class', () => {
  const wrapper = shallow(<SelectedImageContainer />);
  const div = wrapper.find('.search-details-container')
  expect(div.length).toEqual(1);
});

it('should render MovieDetailsComponent', () => {
  const wrapper = shallow(<SearchContainer />);
  const container = wrapper.find('MovieDetailsComponent')
  expect(container.length).toEqual(1);
});

xit('should match the snapshot', () => {
  const component = renderer.create(<SelectedImageContaine />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
