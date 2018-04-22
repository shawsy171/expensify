import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import moment from 'moment';
import numeral from 'numeral';

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
      <p>
        { '£' + numeral(amount / 100).format('0,0.00') }
        -
        { moment(createdAt).format('MMMM Do, YYYY') }
      </p>
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
