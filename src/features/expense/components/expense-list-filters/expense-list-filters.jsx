// @ts-check
import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from './../../store/filters/actions';

const ExpenseListFilters = (props) => {
  const { filters, dispatch } = props
  const handleOnChange = (e) => {
    dispatch(setTextFilter(e.target.value))
  }
  return (
    <div>
      <label htmlFor="text">
        Text: 
        <input type="text" id="text" value={filters.text} onChange={handleOnChange}/>
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