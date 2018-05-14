import * as actions from './actions';
import expensesReducer, { EXPENSES_REDUCER_DEFAULT_STATE } from './reducers';

describe('Expense Store', () => {
  describe('Actions and Reducers', () => {
    test('should setup default expense value', () => {
      const state = expensesReducer(undefined, { type: '@@INIT' });

      expect(state).toEqual(EXPENSES_REDUCER_DEFAULT_STATE);
    });

    test('it should add a new expense to the expense array', () => {
      const newExpense = {
        amount: 19000,
        createdAt: 91993325633,
        description: 'Gas Bill',
        note: 'to be paid',
      };
      const action = actions.addExpenseSuccess(newExpense, '123');

      const r = expensesReducer(EXPENSES_REDUCER_DEFAULT_STATE, action);
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

    test('it should fail to edit the note property of expense with id of "123abc" ', () => {
      const state = [{
        amount: 19000,
        createdAt: 91993325633,
        description: 'Gas Bill',
        note: 'to be paid',
        id: '123abc',
      }];

      const action = actions.editExpense('abc', { note: 'a new note' });

      const r = expensesReducer(state, action);
      expect(r[0].note).toBe('to be paid');
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

    test('it should fail to remove an expense from the expense reducer', () => {
      const state = [{
        amount: 19000,
        createdAt: 91993325633,
        description: 'Gas Bill',
        note: 'to be paid',
        id: 'abc123',
      }];

      const expenseToRemoveId = '123abc';
      const action = actions.removeExpense(expenseToRemoveId);

      const r = expensesReducer(state, action);
      expect(r).toEqual(state);
    });
  }); // END OF describe('Actions and Reducers',
}); // END OF describe('Expense Store',
