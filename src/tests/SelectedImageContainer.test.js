import React from 'react';
import SelectedImageContainer from '../containers/SelectedImageContainer'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<SelectedImageContainer />);
});

xit('should match the snapshot', () => {
  const component = renderer.create(<SelectedImageContaine />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
