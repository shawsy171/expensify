// @ts-check

import React from 'react';

const ExpenseListItem = (props) => {
  const { expense: { description, amount, createdAt } } = props;
  console.log('description', props);
  return (
    <div>
      <h3>{ description }</h3>
      <p>{ amount } - { createdAt }</p>
    </div>
  )
}


export default ExpenseListItem;
