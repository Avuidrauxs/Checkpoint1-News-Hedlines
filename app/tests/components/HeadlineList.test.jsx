import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
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
   it('should call "renderHeadlines" only when component is rendered ',()=>{
     const spy = sinon.stub(HeadlineList.prototype, 'renderHeadlines');
     const wrapper = shallow(<HeadlineList />);
     wrapper.instance().renderHeadlines();
     expect(spy.calledOnce).toBe(false);
   });
});
