import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';


// components
import ExpenseForm from '../../components/expense-form/expense-form';

// store
import { addExpense } from './../../store/expense/actions';

const AddExpensePage = ({ dispatch, history }) => {
  const onSubmit = (expense) => {
    dispatch(addExpense(expense));
    history.push('/');
  };

  return (
    <div>
      <p> this is the AddExpensePage </p>
      <ExpenseForm
        onSubmit={onSubmit}
      />
    </div>
  );
};

AddExpensePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default connect()(AddExpensePage);
