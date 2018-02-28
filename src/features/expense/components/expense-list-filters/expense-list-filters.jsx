// @ts-check
import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from './../../store/filters/actions';

const ExpenseListFilters = (props) => {
  const { filters, dispatch } = props
  const handleOnChange = (e) => {
    const sortBy = {
      amount: sortByAmount,
      date: sortByDate,
    }

    if (e.target.id === 'text') {
      dispatch(setTextFilter(e.target.value))
    } else if (e.target.id === 'sortBy') {
      dispatch(sortBy[e.target.value].call(null, e.target.value));
    }
    
  }
  return (
    <div>
      <label htmlFor="text">
        Text: 
        <input type="text" id="text" value={filters.text} onChange={handleOnChange}/>
      </label>

      <label>
        Sort By:
        <select 
          value={filters.sortBy} 
          name="sortBy" 
          id="sortBy" 
          onChange={handleOnChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
      </label>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);