import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import expects from 'expect';


import HeadlineItem from '../../components/HeadlineItem';

const headline ={
  name: 'Audax' ,
  description: 'Is awesome',
  htmlFor: '',
  sortBysAvailable: ['always','forever']
}
describe('Headline Item', () => {
  it('should exist', () => {
    expects(HeadlineItem).toExist();
  });
  it('should render without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<HeadlineItem />, div);
   });
   it('should render with props without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HeadlineItem {...headline}/>, div);
    });
   it('should render a snapshot',() => {
     const tree = renderer.create(<HeadlineItem />).toJSON();
     expect(tree).toMatchSnapshot();
   });
   it('should access class method "viewArticles" in props',()=>{
     const viewArticles = jest.fn();
     const component = mount(<HeadlineItem onClick={viewArticles}/>);
     expect(component.props().onClick).toBe(viewArticles);
     const button = component.find('button');
     expect(button).toBeDefined();
     button.simulate('click');
   });
   it('should access class method "handleCheckbox" in props',()=>{
     const handleCheckbox = jest.fn();
     const e = {
       target: {
         value: true
       }
     };
     const component = mount(<HeadlineItem onChange={handleCheckbox}/>);
     expect(component.props().onChange).toBe(handleCheckbox);
     component.setState({isChecked: true});
     expect(component.state().isChecked).toBe(true);
     component.instance().handleCheckbox(e);

   });
});
