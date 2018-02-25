// @ts-check
import React from 'react';
import ReactDOM from 'react-dom';

// styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// routes
import AppRoutes from './core/routes/app.routes.jsx';

// state
import configureStore from './core/store/configureStore';
import { Provider } from 'react-redux';
import * as expenseActions from './features/expense/store/expense/actions.js';
import * as expenseSelectors from './features/expense/store/expense/selectors';
import * as filterActions from './features/expense/store/filters/actions';

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(
  expenseActions.addExpense({
    description: 'Water Bill', 
    note: 'to be paid',
    amount: 45000,
    createdAt: 19299303
  })
);

const expenseTwo = store.dispatch(
  expenseActions.addExpense({
    description: 'Gas Bill', 
    note: 'to be paid',
    amount: 19000,
    createdAt: 256303
  })
);

store.dispatch(filterActions.setTextFilter('water'));

setTimeout(() => {
  store.dispatch(filterActions.setTextFilter('bill'));
}, 3000);
// const state = store.getState();
//   const visibleExpenses = expenseSelectors.getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));