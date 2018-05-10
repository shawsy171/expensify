import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// styles
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

// routes
import AppRoutes from './core/routes/app.routes';

// state
import configureStore from './core/store/configureStore';
import * as expenseActions from './features/expense/store/expense/actions';
// import * as filterActions from './features/expense/store/filters/actions';

import './database/firebase';

const store = configureStore();

store.subscribe(() => {
  console.log('GetState', store.getState());
});

store.dispatch(expenseActions.addExpense({
  description: 'best test',
  note: 'this is a note',
  amount: 9399393,
  createdAt: 123456789,
}));

// store.dispatch(expenseActions.addExpenseSuccess({
//   description: 'Water Bill',
//   note: 'to be paid',
//   amount: 45000,
//   createdAt: 3119933256303,
// }));

// store.dispatch(expenseActions.addExpense({
//   description: 'Gas Bill',
//   note: 'to be paid',
//   amount: 19000,
//   createdAt: 91993325633,
// }));

// store.dispatch(expenseActions.addExpense({
//   description: 'Rent',
//   note: 'to be paid',
//   amount: 109000,
//   createdAt: 1999305,
// }));

// store.dispatch(expenseActions.addExpense({
//   description: 'Credit Card Bill',
//   note: 'to be paid',
//   amount: 63000,
//   createdAt: 9299304,
// }));

// store.dispatch(filterActions.setTextFilter(''));

// setTimeout(() => {
//   store.dispatch(filterActions.setTextFilter(''));
// }, 3000);
// const state = store.getState();
//   const visibleExpenses = expenseSelectors.getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
