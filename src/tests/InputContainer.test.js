import React from 'react';
import InputContainer from '../containers/InputContainer'
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
 shallow(<InputContainer />);
});

it('should render input box', () => {
 const wrapper = shallow(<InputContainer />);
 const input = wrapper.find('input');
 expect(input.exists()).toEqual(true);
});

it('should render input box with input-box selector', () => {
 const wrapper = shallow(<InputContainer />);
 const input = wrapper.find('.input-box');
 expect(input.exists()).toEqual(true);
});

it('should render form', () => {
 const wrapper = shallow(<InputContainer />);
 const form = wrapper.find('form');
 expect(form.exists()).toEqual(true);
});

it('should have input with placeholder prop search', () => {
  const wrapper = shallow(<InputContainer />);
  const input = wrapper.find('input');
  expect(input.prop('placeholder')).toEqual('SEARCH');
});

it('should render form with onSubmit prop', () => {
 const wrapper = shallow(<InputContainer />);
 const form = wrapper.find('form');
 expect(form.prop('onSubmit').length).toEqual(1);
});

it('should render input box with onKeyPress prop', () => {
 const wrapper = shallow(<InputContainer />);
 const input = wrapper.find('.input-box');
 expect(input.prop('onKeyPress').length).toEqual(1);
});


it('should match the snapshot', () => {
 const component = renderer.create(
  <InputContainer />
 );
 let tree = component.toJSON();
 expect(tree).toMatchSnapshot();
})
