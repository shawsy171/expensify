// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
// import { map } from 'rxjs/operators'; rxjs 6 syntax

// firebase
import { addExpenseToDb } from './../../../../database/firebase';
import * as dbOperations from './../../../../database/firebase';
import {
  expenseTypes,
  addExpenseSuccess,
  addExpenseFailure,
} from './actions';
 
const api = { fetchSomething: id => Observable.of(response) };
// export const addExpenseEpic = (action$, store, dbOperations) =>
//   action$.ofType(expenseTypes.ADD_EXPENSE)
//     // .do(val => console.log('action$', action$))
//     // .mergeMap(action => Observable.fromPromise(addExpenseToDb(action.expense))
//     .mergeMap(action => Observable.fromPromise(dbOperations.addExpenseToDb(action.expense))
//       .map(ref => addExpenseSuccess(action.expense, ref.key))
//       // .catch((err) => Observable.throw(err))
//       .catch(err => Observable.of(addExpenseFailure(action.expense, err))));
console.log(addExpenseToDb);
const addExpenseToDb1 = addExpenseToDb;

export const addExpenseEpic = (action$, store, addExpenseToDb1) => {
  console.log(addExpenseToDb)
  return action$.ofType(expenseTypes.ADD_EXPENSE)
    // .do(val => console.log('action$', action$))
    // .mergeMap(action => Observable.fromPromise(addExpenseToDb(action.expense))
    .mergeMap(action => Observable.fromPromise(addExpenseToDb1(action.expense))
      .map(ref => addExpenseSuccess(action.expense, ref.key))
      // .catch((err) => Observable.throw(err))
      .catch(err => Observable.of(addExpenseFailure(action.expense, err))));
}
export const removeExpnseEpic = '';
