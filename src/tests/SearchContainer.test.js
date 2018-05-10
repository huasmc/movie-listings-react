import React from 'react';
import SearchContainer from '../containers/SearchContainer'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<SearchContainer />);
});
