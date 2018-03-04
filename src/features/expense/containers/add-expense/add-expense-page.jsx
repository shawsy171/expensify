import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

// components
import ExpenseForm from '../../components/expense-form/expense-form';

// store
import { addExpense } from './../../store/expense/actions';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <p> this is the AddExpensePage </p>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addExpense: expense => dispatch(addExpense(expense)),
});

AddExpensePage.propTypes = {
  addExpense: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
