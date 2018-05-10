import React from 'react';
import GenreListComponent from '../containers/GenreListComponent'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<GenreListComponent />);
});
