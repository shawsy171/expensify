import * as actions from './actions';
import expensesReducer from './reducers';

describe('Expense Store', () => {
  test('it should add a new expense to the expense array', () => {
    const newExpense = {
      amount: 19000,
      createdAt: 91993325633,
      description: 'Gas Bill',
      note: 'to be paid',
    };
    const action = actions.addExpense(newExpense);

    const r = expensesReducer([], action);
    expect(r).toEqual([{ ...newExpense, id: expect.any(String) }]);
  });

  test('it should edit the note property of expense with id of "123abc" ', () => {
    const state = [{
      amount: 19000,
      createdAt: 91993325633,
      description: 'Gas Bill',
      note: 'to be paid',
      id: '123abc',
    }];

    const action = actions.editExpense('123abc', { note: 'a new note' });

    const r = expensesReducer(state, action);
    expect(r[0].note).toBe('a new note');
  });

  test('it should remove an expense from the expense reducer', () => {
    const state = [{
      amount: 19000,
      createdAt: 91993325633,
      description: 'Gas Bill',
      note: 'to be paid',
      id: '123abc',
    }];

    const expenseToRemoveId = '123abc';
    const action = actions.removeExpense(expenseToRemoveId);

    const r = expensesReducer(state, action);
    expect(r).toEqual([]);
  });
}); // END of describe('Expense Store',
