// @ts-check
import { createStore, combineReducers } from 'redux';
import expensesReducer from '../../features/expense/store/expense/reducers';
import filterReducer from '../../features/expense/store/filters/reducers';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer,
    })
  );
  
  return store;
}


