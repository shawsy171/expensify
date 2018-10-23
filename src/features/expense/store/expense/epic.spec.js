import { addExpenseEpic } from './epics';
import { expenseTypes } from './actions';
import * as actions from './actions';

// rxjs
import { Observable } from 'rxjs/Observable';
import { ActionsObservable } from 'redux-observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toArray';


describe('Database connection Epics', () => {
  test('should add one expense to database', (done) => {    
    const addExpenseToDb = jest.fn;
    const action$ = ActionsObservable.of({ type: expenseTypes.ADD_EXPENSE });
    const dbOperations = {};
    const result = addExpenseEpic(action$, store, dbOperations)
      .toArray()
      .subscribe((result) => {

        expect(result).toEqual([
          { 
            "type": "ADD_EXPENSE_SUCCESS",
            "expense": { 
              "id": expect.any(String)
            },
          }
        ]);
        // expect(result).toBe(ActionsObservable.of({ type: expenseTypes.ADD_EXPENSE_SUCCESS }));
        done();
      });
  })
})