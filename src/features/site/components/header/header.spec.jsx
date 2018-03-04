import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';

import Header from './header';


describe('Header Component', () => {
  test('should render correctly', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
