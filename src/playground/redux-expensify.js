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

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
})

// SET_END_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
})

// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
});

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
      return Object.assign({}, state, { text: action.text });

    case 'SORT_BY_AMOUNT':
      return Object.assign({}, state, { sortBy: 'amount' });

    case 'SORT_BY_DATE':
      return Object.assign({}, state, { sortBy: 'date' });

    case 'SET_START_DATE':
      return Object.assign({}, state, { startDate: action.startDate });
    
    case 'SET_END_DATE':
      return Object.assign({}, state, { endDate: action.endDate });

    default: 
      return state;
  }
};
// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
}
// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer,
  })
)

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});


// Actions Dispatchers
const expenseOne = store.dispatch(
  addExpense(
    { 
      description: 'Rent', 
      amount: 100,
      createdAt: 1000,
    }
  )
);

const expenseTwo = store.dispatch(
  addExpense(
    { 
      description: 'Coffee', 
      amount: 300,
      createdAt: -1,
    }
  )
);

const expenseThree = store.dispatch(
  addExpense(
    { 
      description: 'Dev Book', 
      amount: 1000,
      createdAt: 345,
    }
  )
);

// store.dispatch(
//   removeExpense({ id: expenseOne.expense.id })
// );

// store.dispatch(
//   editExpense(expenseTwo.expense.id, { amount: 500 })
// );

// // filters
// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter(''))

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1234));

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