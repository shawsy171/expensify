
import moment from 'moment';
import * as actions from './actions';
import expensesReducer, { EXPENSES_REDUCER_DEFAULT_STATE } from './reducers';
import selectExpenses from './selectors';

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
      const action = actions.addExpense(newExpense);

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

  describe('Selectors', () => {
    let expenses = [];

    beforeEach(() => {
      expenses = [{
        id: '1',
        description: 'gym',
        note: '',
        amount: 195,
        createdAt: 0,
      }, {
        id: '2',
        description: 'rent',
        note: '',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf(),
      }, {
        id: '3',
        description: 'Credit Card',
        note: '',
        amount: 4500,
        createdAt: moment(0).add(4, 'days').valueOf(),
      }];
    });

    test('should filter by text value', () => {
      const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
      };
      const results = selectExpenses(expenses, filters);

      expect(results).toEqual([expenses[2], expenses[1]]);
    });

    test('should filter by startDate', () => {
      const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined,
      };
      const results = selectExpenses(expenses, filters);

      expect(results).toEqual([expenses[2], expenses[0]]);
    });

    test('should filter by EndDate', () => {
      const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0),
      };
      const results = selectExpenses(expenses, filters);

      expect(results).toEqual([expenses[0], expenses[1]]);
    });

    test('should sort by date highest to lowest', () => {
      const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
      };
      const results = selectExpenses(expenses, filters);

      expect(results).toEqual([expenses[2], expenses[0], expenses[1]]);
    });

    test('should sort by amount highest to lowest', () => {
      const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
      };
      const results = selectExpenses(expenses, filters);

      expect(results).toEqual([expenses[1], expenses[2], expenses[0]]);
    });
  }); // END OF describe('Selectors',
}); // END OF describe('Expense Store',

