import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
// import { tap, mapTo } from 'rxjs/operators';


export const addExpenseEpic = action$ =>
    action$.ofType('ADD_EXPENSE_EPIC')
        .do(val => console.log(val))
        .map(action => ({ type: 'ADD_EXPENSE', expense: action.expense }))
        .do(val => console.log(val))