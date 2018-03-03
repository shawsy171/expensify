import { createStore, combineReducers } from 'redux';
import expensesReducer from '../../features/expense/store/expense/reducers';
import filterReducer from '../../features/expense/store/filters/reducers';

/* eslint-disable no-underscore-dangle */
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
/* eslint-enable */
