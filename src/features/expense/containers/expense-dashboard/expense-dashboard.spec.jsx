import React from 'react';
import { shallow } from 'enzyme';

import ExpenseDashBoard from './expense-dashboard';

describe('ExpenseDashBoard Component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<ExpenseDashBoard />);
    expect(wrapper).toMatchSnapshot();
  });
});
