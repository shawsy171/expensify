import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import ExpenseListItem from './expense-list-item';

describe('ExpenseListItem Component', () => {
  test('should render an item', () => {
    const expense = {
      id: '3',
      description: 'Credit Card',
      note: '',
      amount: 4500,
      createdAt: moment(0).add(4, 'days').valueOf(),
    };

    const wrapper = shallow(<ExpenseListItem expense={expense} />);
    expect(wrapper).toMatchSnapshot();
  });
});
