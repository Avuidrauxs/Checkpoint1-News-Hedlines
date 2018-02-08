import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import expects from 'expect';


import NotFound from '../../components/NotFound';

describe('NotFound', () => {
  it('should exist', () => {
    expects(NotFound).toExist();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NotFound />, div);
  });
  it('should render a snapshot', () => {
    const tree = renderer.create(<NotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
