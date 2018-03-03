import moment from 'moment';

/** filters and sorts an array of expenses
 * @param { Array<Object> } expenses
 * @interface Array<{
 *  description = string,
 *  note = string,
 *  amount = number,
 *  createdAt = number
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
 *  startDate?: moment(date: number | string),
 *  endDate?: moment(date: number | string),
 * }
 * @example {
 *  text: 'rent',
 *  sortBy: 'amount',
 *  startDate: moment(10002902),
 *  endDate: moment(90995004),
 * }
 * @returns { Array<Object> } expenses
 */
const getVisibleExpenses = (expenses, {
  text, sortBy, startDate, endDate,
}) => (expenses.filter((expense) => {
  const createdAtMoment = moment(expense.createdAt);
  const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
  const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

  const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

  return startDateMatch && endDateMatch && textMatch;
}).sort((a, b) => {
  if (sortBy === 'date') {
    return a.createdAt < b.createdAt ? 1 : -1;
  } else if (sortBy === 'amount') {
    return a.amount < b.amount ? 1 : -1;
  }
  return undefined;
}));

export default getVisibleExpenses;
