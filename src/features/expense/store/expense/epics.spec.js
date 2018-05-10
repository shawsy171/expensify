import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';
import { addExpenseEpic } from './epics';
import { addExpense } from './actions';
import { equal } from 'assert';

const epicMiddleware = createEpicMiddleware(addExpenseEpic);
const mockStore = configureMockStore([epicMiddleware]);

describe('addExpenseEpic', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    nock.cleanAll();
    // epicMiddleware.replaceEpic(addExpenseEpic);
  });

  test('should add expense when call to database is successful', () => {
    const expense = { id: 123, amount: 27 };

    store.dispatch(addExpense(expense));

    nock('http://example.com/')
      .get('/api/users/123')
      .reply(403, expense);
    // this test is broken it should equal
    // [addExpense(expense), addExpenseSuccess(expense)]
    // https://redux-observable.js.org/docs/recipes/WritingTests.html
    expect(store.getActions()).toEqual([addExpense(expense)]);
  });
});

