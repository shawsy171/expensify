import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import PropTypes from 'prop-types';

class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calenderFocused: false,
    error: false,
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {
      description,
      amount,
      createdAt,
    } = this.state;

    const { onSubmit } = this.props;

    if (!description || !amount) {
      this.setState(() => ({ error: true }));
    } else {
      this.setState(() => ({ error: false }));

      // pass expense to the AddExpense container
      onSubmit({
        description,
        amount: parseFloat(amount),
        createdAt: createdAt.valueOf(),
      });
    }
  }
  onDateChange = (createdAt) => {
    if (createdAt) {
      return this.setState(() => ({ createdAt }));
    }
    return undefined;
  }

  onFocusChange = ({ focused }) => this.setState(() => ({ calenderFocused: focused }));

  handleDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => (
      { description }
    ));
  }

  handleNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }

  handleAmountChange = (e) => {
    const amount = e.target.value;
    // can only be a number with a max of 2 decimal places
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  formError = () => (this.state.error ? <p>There has been an error</p> : undefined);

  render() {
    const {
      description,
      note,
      amount,
      createdAt,
      calenderFocused,
    } = this.state;

    return (
      <div>
        <h1>ExpenseForm</h1>
        {this.formError()}
        <form
          onSubmit={this.onSubmit}
        >
          <input
            type="text"
            placeholder="description"
            // autoFocus
            value={description}
            onChange={this.handleDescriptionChange}
          />
          <input
            placeholder="Amount"
            type="text"
            value={amount}
            onChange={this.handleAmountChange}
          />
          <SingleDatePicker
            date={createdAt}
            onDateChange={this.onDateChange}
            focused={calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your Expense (Optional)"
            value={note}
            onChange={this.handleNoteChange}
          />

          <button >Add Expense</button>
        </form>
      </div>
    );
  }
}

ExpenseForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ExpenseForm;
