import nock from 'nock';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/of';

import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware, ActionsObservable } from 'redux-observable';
import { addExpenseEpic } from './epics';
import { addExpense, addExpenseSuccess } from './actions';

const epicMiddleware = createEpicMiddleware(addExpenseEpic);
const mockStore = configureMockStore([epicMiddleware]);

describe('addExpenseEpic', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    nock.cleanAll();
    epicMiddleware.replaceEpic(addExpenseEpic);
  });

  test('should add expense when call to database is successful', (done) => {
    const expense = {
      amount: 27,
      createdAt: 0,
      description: '',
      id: '-LCB958kAEspLLhFkp6y',
      note: '',
    };
    // nock('http://example.com/')
    //   .get('/api/users/123')
    //   .reply(403, expense);

    // store.dispatch(addExpense(expense));
    // this test is broken it should equal
    // [addExpense(expense), addExpenseSuccess(expense)]
    // https://redux-observable.js.org/docs/recipes/WritingTests.html
    // expect(store.getActions()).toEqual([addExpense(expense)]);
    // expect(store.getActions()).toEqual([addExpense(expense)]);
    const action$ = ActionsObservable.of(addExpense(expense));
    addExpenseEpic(action$)
      .toArray()
      .subscribe((result) => {
        expect(result).toEqual([{
          expense: { ...expense, id: expect.any(String) },
          type: 'ADD_EXPENSE_SUCCESS',
        }]);
        done();
      });
  });
});

// expect(r).toEqual([{ ...newExpense, id: expect.any(String) }]);
