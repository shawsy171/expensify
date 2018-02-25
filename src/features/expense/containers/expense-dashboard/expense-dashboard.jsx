// @ts-check
import React from 'react';

// components
import ExpenseList from '../../../expense/components/expense-list/expense-list.jsx';
import ExpenseListFilters from '../../../expense/components/expense-list-filters/expense-list-filters.jsx';

const ExpenseDashBoard = () => (
  <div>
    <p> this is the Expense DashBoard </p>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashBoard;