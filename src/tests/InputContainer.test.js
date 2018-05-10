import React from 'react';
import InputContainer from './InputContainer'
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
 shallow(<InputContainer />);
})

it('should render input box', () => {
 const wrapper = shallow(<InputContainer />);
 const input = wrapper.find('.input-box');
 expect(input.exists()).toEqual(true);
})

xit('should match the snapshot', () => {
 const component = renderer.create(
  <InputContainer />
 );
 let tree = component.toJSON();
 expect(tree).toMatchSnapshot();
})
