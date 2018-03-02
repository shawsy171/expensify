// @ts-check
import React from 'react';
import { Route } from 'react-router-dom';

import AddExpensePage from './../containers/add-expense/add-expense-page';
import EditExpensePage from './../containers/edit-expense/edit-expense-page';

const ExpenseRoutes = () => (
  [
    <Route key="create" path="/create" component={AddExpensePage} />,
    <Route key="edit" path="/edit/:id" component={EditExpensePage} />,
  ]
);

export default ExpenseRoutes;
