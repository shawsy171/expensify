// @ts-check
import React from 'react';

// store
import { connect } from 'react-redux';

// components
import ExpenseListItem from './components/expense-list-item/expense-list-item.jsx';

// selectors
import selectorExpenses from './../../store/expense/selectors';

const ExpenseList = (props) => {
  const mapList = () => (
    props.expenses.map((expense, index) => 
      <ExpenseListItem key={index} expense={expense} />
    )
  )
  
  return (
    <div>
      <h1>Expense List</h1>
      { mapList() }
    </div>
  )
}

const mapStateToProps = (state) => (
  {
    expenses: selectorExpenses(state.expenses, state.filters),
  }
)

export default connect(mapStateToProps)(ExpenseList);


