import React from 'react';
import { shallow } from 'enzyme';
import expenses from './../../../../tests/fixtures/expenses';

import { ExpenseList } from './expense-list';

describe('ExpenseList Component', () => {
  test('should render expneses correctly', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render <p>No expenses</p> when expense list is zero', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
