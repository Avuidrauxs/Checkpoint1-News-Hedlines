import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import expects from 'expect';


import HeadlineList from '../../components/HeadlineList';
import HeadlineItem from '../../components/HeadlineItem';

describe('Headlines List', () => {
  it('should exist', () => {
    expects(HeadlineList).toExist();
  });
  it('renders without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<HeadlineList/>, div);
   });
   it('should render a snapshot',() => {
     const tree = renderer.create(<HeadlineList />).toJSON();
     expect(tree).toMatchSnapshot();
   });

});
