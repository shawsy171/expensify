import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// store
import { editExpense, removeExpense } from './../../store/expense/actions';

// components
import ExpenseForm from './../../components/expense-form/ExpenseForm';

const EditExpensePage = (props) => {
  const {
    expense,
    dispatch,
    history,
    match: {
      params: {
        id,
      },
    },
  } = props;

  const handleSubmit = (submittedExpense) => {
    dispatch(editExpense(id, submittedExpense));
    history.push('/');
  };

  const removeClick = () => {
    dispatch(removeExpense(id));
    history.push('/');
  };

  return (
    <div>
      <p> this is the edit page, {id}</p>
      <ExpenseForm
        expense={expense}
        onSubmit={handleSubmit}
      />
      <button onClick={removeClick} >Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => {
    console.log('expense.id', expense.id, 'params.id', props.match.params.id, expense.id === props.match.params.id);
    return expense.id === props.match.params.id;
  }),
});

EditExpensePage.propTypes = {
  expense: PropTypes.shape({
    amount: PropTypes.number,
    createdAt: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.string,
    note: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default connect(mapStateToProps)(EditExpensePage);
