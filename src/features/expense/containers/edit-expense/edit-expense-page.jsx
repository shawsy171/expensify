import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// store
import { editExpense, removeExpense } from './../../store/expense/actions';

// components
import ExpenseForm from './../../components/expense-form/expense-form';

export class EditExpensePage extends React.Component {
  onSubmit = (submittedExpense) => {
    this.props.editExpense(this.props.match.params.id, submittedExpense);
    this.props.history.push('/');
  };

  removeClick = () => {
    this.props.removeExpense(this.props.match.params.id);
    this.props.history.push('/');
  }

  render() {
    const {
      expense,
      match: {
        params: {
          id,
        },
      },
    } = this.props;
    return (
      <div>
        <p> this is the edit page, {id}</p>
        <ExpenseForm
          expense={expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.removeClick} >Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  editExpense: (id, submittedExpense) => dispatch(editExpense(id, submittedExpense)),
  removeExpense: id => dispatch(removeExpense(id)),
});

EditExpensePage.propTypes = {
  expense: PropTypes.shape({
    amount: PropTypes.number,
    createdAt: PropTypes.number,
    description: PropTypes.string,
    id: PropTypes.string,
    note: PropTypes.string,
  }).isRequired,
  editExpense: PropTypes.func.isRequired,
  removeExpense: PropTypes.func.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
