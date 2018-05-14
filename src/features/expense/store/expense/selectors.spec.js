import moment from 'moment';
import selectExpenses, { selectorExpensesTotal } from './selectors';

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

  describe('getExpensesTotal', () => {
    test('should return 0 if no expense', () => {
      const results = selectorExpensesTotal([]);

      expect(results).toBe(0);
    });

    test('should correctly add up a single expense', () => {
      expenses = expenses.slice(0, 1);
      const results = selectorExpensesTotal(expenses);

      expect(results).toBe(195);
    });

    test('should correctly add up multiple expenses', () => {
      const results = selectorExpensesTotal(expenses);

      expect(results).toBe(114195);
    });
  });
}); // END OF describe('Selectors',
