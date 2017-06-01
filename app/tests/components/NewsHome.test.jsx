import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import expects from 'expect';
import { shallow } from 'enzyme';


import NewsHome from '../../components/NewsHome';
import HeadlineList from '../../components/HeadlineList';

describe('News Home', () => {
  it('should exist', () => {
    expects(NewsHome).toExist();
  });
  it('renders without crashing', () => {
       const wrapper = shallow(<NewsHome />);
   });
  //  it('should render a snapshot',() => {
  //    const tree = renderer.create(<NewsHome />).toJSON();
  //    expect(tree).toMatchSnapshot();
  //  });

});
