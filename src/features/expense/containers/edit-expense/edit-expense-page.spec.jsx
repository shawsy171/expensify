import React from 'react';
import { shallow } from 'enzyme';
import { historyMock, matchMock } from './../../../../tests/router.mock';
import expenses from './../../../../tests/fixtures/expenses';

// component
import { EditExpensePage } from './edit-expense-page';

describe('EditExpensePage Component', () => {
  let wrapper;
  let history;
  let editExpense;
  let match;
  let removeExpense;

  beforeEach(() => {
    editExpense = jest.fn();
    history = { ...historyMock };
    match = { ...matchMock, params: { id: expenses[0].id } };
    removeExpense = jest.fn();

    wrapper = shallow(<EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      match={match}
      expense={expenses[0]}
    />);
  });

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle onSubmit editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
  });

  test('should remove expense ', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[0].id);
  });
});
