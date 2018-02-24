// @ts-check
import { expenseTypes } from './actions';

const EXPENSES_REDUCER_DEFAULT_STATE = [];

const expensesReducer = (state = EXPENSES_REDUCER_DEFAULT_STATE, action) => {
  switch (action.type) {
    case expenseTypes.ADD_EXPENSE:
      return [...state, action.expense]

    case expenseTypes.REMOVE_EXPENSE:
      return state.filter(({ id }) => (id !== action.id));

    case expenseTypes.EDIT_EXPENSE:
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

export default expensesReducer;