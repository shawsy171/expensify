// @ts-check
import React from 'react';
import ReactDOM from 'react-dom';

// styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// routes
import AppRoutes from './routes/app.routes.jsx';

// state
import configureStore from './store/configureStore';
import * as expenseActions from './store/expenses/actions';
import * as expenseSelectors from './store/expenses/selectors';
import * as filterActions from './store/filters/actions';

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(
  expenseActions.addExpense({
    description: 'Water Bill', 
    note: 'to be paid',
    amount: 5000,
    createdAt: 19299303
  })
);

const expenseTwo = store.dispatch(
  expenseActions.addExpense({
    description: 'Gas Bill', 
    note: 'to be paid',
    amount: 19000,
    createdAt: 19299303
  })
);

store.dispatch(filterActions.setTextFilter('water'));

const state = store.getState();
  const visibleExpenses = expenseSelectors.getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);



ReactDOM.render(<AppRoutes />, document.getElementById('app'));