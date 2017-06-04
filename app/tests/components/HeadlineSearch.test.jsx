import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import expects from 'expect';
import renderer from 'react-test-renderer';


import HeadlineSearch from '../../components/HeadlineSearch';
import NewsHome from '../../components/NewsHome';

const newsSources = [{
  id: 'cnn',
  name: 'CNN',
  description: 'View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN',
  url: 'http://us.cnn.com',
},
{
  id: 'daily-mail',
  name: 'Daily Mail',
  description: 'All the latest news, sport, showbiz, science and health stories from around the world from the Daily Mail and Mail on Sunday newspapers.',
  url: 'http://www.dailymail.co.uk/home/index.html',
},
{
  id: 'der-tagesspiegel',
  name: 'Der Tagesspiegel',
  description: 'Nachrichten, News und neueste Meldungen aus dem Inland und dem Ausland - aktuell präsentiert von tagesspiegel.de.',
  url: 'http://www.tagesspiegel.de',
}];

describe('Headline Search', () => {

  it('should exist', () => {
    expects(HeadlineSearch).toExist();
  });
  it('renders without crashing', () => {
       const div = document.createElement('div');
       ReactDOM.render(<HeadlineSearch/>, div);
   });
   it('should render a snapshot',() => {
     const tree = renderer.create(<HeadlineSearch />).toJSON();
     expect(tree).toMatchSnapshot();
   });
   it('should access class method "handleSearch" in props',()=>{
     const handleSearch = jest.fn();
     const onSearch = jest.fn();
     const component = mount(<HeadlineSearch onChange={handleSearch}/>);
     expect(component.props().onChange).toBe(handleSearch);
     const input = component.find('input');
     expect(component.state().searchText).toBe('');
     input.simulate('change', {target: { searchText: ''}} );
     expect(input.length).toEqual(1);
   });
});
