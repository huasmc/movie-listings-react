import React from 'react';
import MovieComponent from '../components/MovieComponent'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<MovieComponent />);
});
