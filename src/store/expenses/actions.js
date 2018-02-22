// @ts-check
import uuid from 'uuid';

// Actions
export const expenseTypes = {
  ADD_EXPENSE: 'ADD_EXPENSE',
  REMOVE_EXPENSE: 'REMOVE_EXPENSE',
  EDIT_EXPENSE: 'EDIT_EXPENSE',
}

// Action Generators

/** adds an expense to the expenses array 
 * @param { Object } expenseObject
 * @interface 
 * { 
 *    description: string, 
 *    note: string, 
 *    amount: number, 
 *    createdAt: number 
 * }
 * @example 
 * {
      description: 'Rent', 
      note: 'to be paid',
      amount: 5000,
      createdAt: 19299303
    }
 */
export const addExpense = (
    {
      description = '', 
      note = '',
      amount = 0,
      createdAt = 0
    } = {}
  ) => (
    {
      type: expenseTypes.ADD_EXPENSE,
      expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt,
      }
    }
);

/** Removes a expense from the expenses array
 * @param { number } id
 * @example 390ce2f8-7120-4c7c-95ee-8e18f2d65a26
 */
export const removeExpense = ({id}) => ({
  type: expenseTypes.REMOVE_EXPENSE,
  id,
});

/** edit an existing expense
 * @param { number } id 
 * @example 390ce2f8-7120-4c7c-95ee-8e18f2d65a26
 * @param { Object } updates 
 * @interface { 
 *  description?: string, 
 *  note?: string, 
 *  amount?: number, 
 *  createdAt?: number 
 * }
 * @example { amount: 500 }
 */
export const editExpense = (id, updates) => ({
  type: expenseTypes.EDIT_EXPENSE,
  id,
  updates,
});
