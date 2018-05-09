// @ts-check
import { expenseTypes } from './actions';

export const EXPENSES_REDUCER_DEFAULT_STATE = [];

const expensesReducer = (state = EXPENSES_REDUCER_DEFAULT_STATE, action) => {
  switch (action.type) {
    case expenseTypes.ADD_EXPENSE_SUCCESS:
      return [...state, action.expense];

    case expenseTypes.ADD_EXPENSE_FAILURE:
      // return [...state, {...action.expense, failure: true }];
      return state;

    case expenseTypes.REMOVE_EXPENSE:
      return state.filter(({ id }) => (id !== action.id));

    case expenseTypes.EDIT_EXPENSE:
      return state.map((expense) => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        }
        return expense;
      });

    default:
      return state;
  }
};

export default expensesReducer;
