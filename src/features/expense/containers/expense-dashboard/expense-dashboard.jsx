// @ts-check
import React from 'react';

// components
import DefaultExpenseList from '../../components/expense-list/expense-list';
import ExpenseListFilters from '../../components/expense-list-filters/expense-list-filters';
import DefaultExpenseSummary from '../../components/expense-summary/expense-summary';

const ExpenseDashBoard = () => (
  <div>
    <p> this is the Expense DashBoard </p>
    <DefaultExpenseSummary />
    <ExpenseListFilters />
    <DefaultExpenseList />
  </div>
);

export default ExpenseDashBoard;
