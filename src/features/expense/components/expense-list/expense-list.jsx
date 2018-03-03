import React from 'react';
import PropTypes from 'prop-types';

// store
import { connect } from 'react-redux';

// components
import ExpenseListItem from './expense-list-item/expense-list-item';

// selectors
import selectorExpenses from './../../store/expense/selectors';

const ExpenseList = (props) => {
  const { expenses } = props;

  const mapList = () => (
    expenses.map(expense =>
      <ExpenseListItem key={expense.id} expense={expense} />)
  );

  return (
    <div>
      <h1>Expense List</h1>
      { mapList() }
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    note: PropTypes.string,
    amount: PropTypes.number,
    createdAt: PropTypes.number,
  })).isRequired,
};

const mapStateToProps = state => (
  { expenses: selectorExpenses(state.expenses, state.filters) }
);


export default connect(mapStateToProps)(ExpenseList);
