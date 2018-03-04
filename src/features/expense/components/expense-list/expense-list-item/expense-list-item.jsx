import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const ExpenseListItem = (props) => {
  const {
    expense: {
      id,
      description,
      amount,
      createdAt,
    },
  } = props;

  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{ description }</h3>
      </Link >
      <p>{ amount } - { createdAt }</p>
    </div>
  );
};

ExpenseListItem.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    amount: PropTypes.number,
    createdAt: PropTypes.number,
  }).isRequired,
};

export default ExpenseListItem;
