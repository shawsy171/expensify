// @ts-check

import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


// ADD_EXPENSE
const addExpense = (
  {
    description = '', 
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => (
  {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt,
    }
  }
)

// REMOVE_EXPENSE
const removeExpense = ({id}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

// Expenses Reducer
const EXPENSES_REDUCER_DEFAULT_STATE = [];

const expensesReducer = (state = EXPENSES_REDUCER_DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]

    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => (id !== action.id));

    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return Object.assign({}, expense, action.updates)
          // return {
          //   ...expense,
          //   ...action.updates,
          // }
        } else {
          return expense
        }
      })
    default:
      return state;
  }
};

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
})

// Filter Reducer
const FILTER_REDUCER_DEFAULT = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
}

const filterReducer = (state = FILTER_REDUCER_DEFAULT, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return Object.assign({}, state, { text: action.text })
    default:
      return state;
  }
};

// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer,
  })
)

store.subscribe(() => {
  console.log(store.getState());
});


// Actions Dispatchers
const expenseOne = store.dispatch(
  addExpense(
    { 
      description: 'Rent', 
      amount: 100,
    }
  )
);

const expenseTwo = store.dispatch(
  addExpense(
    { 
      description: 'Coffee', 
      amount: 300,
    }
  )
);

store.dispatch(
  removeExpense({ id: expenseOne.expense.id })
);

store.dispatch(
  editExpense(expenseTwo.expense.id, { amount: 500 })
);

// filters
store.dispatch(setTextFilter('rent'))
store.dispatch(setTextFilter(''))

const demoState = {
  expenses: [
    {
      id: 'sdfgsdfg',
      description: 'January Rent',
      note: 'this is ithe final payment for this address',
      amount: 54540,
      createdAt: 0,
    }],
    filters: {
      text: 'rent',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined,
    }
}