import React from 'react';
import PreviewInfoComponent from '../components/PreviewInfoComponent'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<PreviewInfoComponent />);
});
