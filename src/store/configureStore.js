// @ts-check
import { createStore, combineReducers } from 'redux';
import expensesReducer from './expenses/reducers';
import filterReducer from './filters/reducers';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer,
    })
  );
  
  return store;
}


