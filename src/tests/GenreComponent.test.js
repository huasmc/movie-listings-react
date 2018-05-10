import React from 'react';
import GenreComponent from '../containers/GenreComponent'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('should render without crashing', () => {
  shallow(<GenreComponent />);
});

// it('should match the snapshot', () => {
//   const component = renderer.create(<GenreComponent />);
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
