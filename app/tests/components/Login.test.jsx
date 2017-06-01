import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import expect from 'expect';
import { shallow } from 'enzyme'


import Login from '../../components/Login';

describe('Login', () => {
  it('should exist', () => {
    expect(Login).toExist();
  });
  it('renders without crashing', () => {
       const wrapper = shallow(<Login/>);
   });
  //  it('should render a snapshot',() => {
  //    const tree = renderer.create(<Login />).toJSON();
  //    expect(tree).toMatchSnapshot();
  //  });
});
