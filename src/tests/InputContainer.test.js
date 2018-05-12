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

xit('should render form with onSubmit prop', () => {
 const wrapper = shallow(<InputContainer />);
 const form = wrapper.find('form');
 expect(JSON.stringify(form.prop('onSubmit'))).toEqual("");
});

xit('should render input box with onKeyPress prop', () => {
 const wrapper = shallow(<InputContainer />);
 const input = wrapper.find('.input-box');
 expect(JSON.stringify(input.prop('onKeyPress'))).toEqual("");
});


it('should match the snapshot', () => {
 const component = renderer.create(
  <InputContainer />
 );
 let tree = component.toJSON();
 expect(tree).toMatchSnapshot();
})
