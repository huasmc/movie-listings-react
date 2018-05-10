import React from 'react';
import PreviewInfoComponent from '../components/PreviewInfoComponent'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<PreviewInfoComponent />);
});

it('should render div with preview-info class', () => {
  const wrapper = shallow(<PreviewInfoComponent/>);
  const div = wrapper.find('.preview-info')
  expect(div.length).toEqual(1);
});
