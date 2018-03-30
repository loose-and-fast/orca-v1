import React from 'react';
import { shallow } from 'enzyme';
import TopNav from './TopNav';

test('TopNav renders', () => {
  const wrapper = shallow(<TopNav />);
  expect(wrapper).toMatchSnapshot();
});
