/** filters and sorts an array of expenses 
 * @param { Array<Object> } expenses 
 * @interface Array<{
 *  text: string, 
 *  sortBy: string,
 *  startDate: number,
 *  endDate: number,
 * }>
 * @example [{
 *  description = 'Rent', 
 *  note = 'to be paid',
 *  amount = 5000,
 *  createdAt = 19299303
 * }, {
 *  description = 'Coffee', 
 *  note = 'I love coffee in the morning',
 *  amount = 300,
 *  createdAt = 85849307
 * }]
 * @param { Object } filterObject
 * @interface {
 *  text?: string, 
 *  sortBy: string,
 *  startDate?: number,
 *  endDate?: number,
 * }
 * @example {
 *  text: 'rent', 
 *  sortBy: 'amount',
 *  startDate: 100,
 *  endDate: 1250,
 * }
 * @returns { Array<Object> } expenses
 */
export const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
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