import React from 'react';
import MovieListContainer from '../containers/MovieListContainer'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<MovieListContainer />);
});
