import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import expects from 'expect';
import renderer from 'react-test-renderer';


import HeadlineSearch from '../../components/HeadlineSearch';


describe('Headline Search', () => {
  it('should exist', () => {
    expects(HeadlineSearch).toExist();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HeadlineSearch />, div);
  });
  it('should render a snapshot', () => {
    const tree = renderer.create(<HeadlineSearch />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should access class method "handleSearch" in props', () => {
    const handleSearch = jest.fn();
    const component = mount(<HeadlineSearch onChange={handleSearch} />);
    expect(component.props().onChange).toBe(handleSearch);
    const input = component.find('input');
    expect(component.state().searchText).toBe('');
    input.simulate('change', { target: { searchText: '' } });
    expect(input.length).toEqual(1);
  });
});
