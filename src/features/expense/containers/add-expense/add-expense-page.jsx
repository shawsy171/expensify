// @ts-check

import React from 'react';
import { connect } from 'react-redux';

// components
import ExpenseForm from './../../components/expense-form/expense-form.jsx';

// store
import { addExpense } from './../../store/expense/actions';

const AddExpensePage = ({ dispatch, history }) => {
  const onSubmit = (expense) => {
    dispatch(addExpense(expense));
    history.push('/');
  }
  return (
    <div>
      <p> this is the AddExpensePage </p>
      <ExpenseForm 
        onSubmit={onSubmit}
      />
    </div>
  );
}


export default connect()(AddExpensePage);