import React from 'react';
import { shallow } from 'enzyme';

import Header from './header';

describe('Header Component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text()).toBe('Expensify');
  });
});
