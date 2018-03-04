// @ts-check
import React from 'react';

// components
import DefaultExpenseList from '../../../expense/components/expense-list/expense-list';
import ExpenseListFilters from '../../../expense/components/expense-list-filters/expense-list-filters';

const ExpenseDashBoard = () => (
  <div>
    <p> this is the Expense DashBoard </p>
    <ExpenseListFilters />
    <DefaultExpenseList />
  </div>
);

export default ExpenseDashBoard;
