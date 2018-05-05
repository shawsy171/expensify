import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import expensesReducer from '../../features/expense/store/expense/reducers';
import filterReducer from '../../features/expense/store/filters/reducers';

import { addExpenseEpic } from './../../features/expense/store/expense/epics';

const epicMiddleware = createEpicMiddleware(combineEpics(addExpenseEpic));

/* eslint-disable no-underscore-dangle */
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer,
    }),
    applyMiddleware(epicMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
/* eslint-enable */


// const { Provider } = ReactRedux;
// const { createStore, applyMiddleware } = Redux;
// const { createEpicMiddleware } = ReduxObservable;

// const epicMiddleware = createEpicMiddleware(pingEpic);

// const store = createStore(pingReducer,
//   applyMiddleware(epicMiddleware)
// );