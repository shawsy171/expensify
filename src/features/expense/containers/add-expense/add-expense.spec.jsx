import React from 'react';
import { shallow } from 'enzyme';
import { historyMock } from './../../../../tests/router.mock';
import expenses from './../../../../tests/fixtures';

import { AddExpensePage } from './add-expense-page';

describe('Add Expense Component', () => {
  let wrapper;
  let history;
  let onSubmit;

  beforeEach(() => {
    onSubmit = jest.fn();
    history = { ...historyMock };
    wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
  });

  test('should render AddExpensePage Correctly ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle onSubmit ', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
  });
});
