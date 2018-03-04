import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import { DateRangePicker } from 'react-dates';

// store
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from './../../store/filters/actions';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

  handleOnChange = (e) => {
    const sortBy = {
      amount: this.props.sortByAmount,
      date: this.props.sortByDate,
    };

    if (e.target.id === 'text') {
      this.props.setTextFilter(e.target.value);
    } else if (e.target.id === 'sortBy') {
      sortBy[e.target.value].call(null, e.target.value);
    }
  };

  render() {
    const { filters } = this.props;
    const { calendarFocused } = this.state;
    return (
      <div>
        <label htmlFor="text">
          Text:
          <input type="text" id="text" value={filters.text} onChange={this.handleOnChange} />
        </label>

        <label htmlFor="sortBy">
          Sort By:
          <select
            value={filters.sortBy}
            name="sortBy"
            id="sortBy"
            onChange={this.handleOnChange}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </label>
        <DateRangePicker
          startDateId="startFilter"
          endDateId="endFilter"
          startDate={filters.startDate}
          endDate={filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

ExpenseListFilters.propTypes = {
  filters: PropTypes.shape({
    text: PropTypes.string,
    sortBy: PropTypes.oneOf([
      'date',
      'amount',
    ]).isRequired,
    endDate: PropTypes.object,
    startDate: PropTypes.object,
  }).isRequired,
  setTextFilter: PropTypes.func.isRequired,
  sortByAmount: PropTypes.func.isRequired,
  sortByDate: PropTypes.func.isRequired,
  setStartDate: PropTypes.func.isRequired,
  setEndDate: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({ filters: state.filters });

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
