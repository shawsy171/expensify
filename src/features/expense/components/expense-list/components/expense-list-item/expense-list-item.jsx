import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
// store
import { connect } from 'react-redux';
import { removeExpense } from './../../../../store/expense/actions';

const ExpenseListItem = (props) => {
  const {
    expense: {
      id,
      description,
      amount,
      createdAt,
    },
    dispatch,
  } = props;

  const removeClick = () => {
    dispatch(removeExpense(id));
  };

  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{ description }</h3>
      </Link >
      <p>{ amount } - { createdAt }</p>
      <button onClick={removeClick} >Remove</button>
    </div>
  );
};

ExpenseListItem.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    amount: PropTypes.number,
    createdAt: PropTypes.number,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(ExpenseListItem);
