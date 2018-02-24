// @ts-check
import React from 'react';

// store
import { connect } from 'react-redux';

const ExpenseList = (props) => {
  const mapList = () => (
    props.expenses.map((expense, index) => <li key={index}>{expense.description}</li>)
  )
  
  return (
    <div>
      <h1>Expense List</h1>
      { props.filters.text }
      { mapList() }
    </div>
  )
}

const mapStateToProps = (state) => (
  {
    expenses: state.expenses,
    filters: state.filters,
  }
)

export default connect(mapStateToProps)(ExpenseList);


