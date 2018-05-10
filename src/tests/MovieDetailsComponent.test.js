import React from 'react';
import MovieDetailsComponent from '../components/MovieDetailsComponent'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<MovieDetailsComponent />);
});
