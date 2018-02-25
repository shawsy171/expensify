// @ts-check

import React from 'react';

// store
import { connect } from 'react-redux';
import { removeExpense } from './../../../../store/expense/actions';

const ExpenseListItem = (props) => {
  const { expense: { id, description, amount, createdAt }, dispatch } = props;
  const handleClick = () => {
    dispatch(removeExpense(id))
  }
  return (
    <div>
      <h3>{ description }</h3>
      <p>{ amount } - { createdAt }</p>
      <button onClick={handleClick} >Remove</button>
    </div>
  )
}


export default connect()(ExpenseListItem);
