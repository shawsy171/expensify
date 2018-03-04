import React from 'react';
import { shallow } from 'enzyme';
import { historyMock } from './../../../../tests/router.mock';
import expenses from './../../../../tests/fixtures/expenses';

// component
import { AddExpensePage } from './add-expense-page';

describe('Add Expense Component', () => {
  let wrapper;
  let history;
  let addExpense;

  beforeEach(() => {
    addExpense = jest.fn();
    history = { ...historyMock };
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
  });

  test('should render AddExpensePage Correctly ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle onSubmit ', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
  });
});
