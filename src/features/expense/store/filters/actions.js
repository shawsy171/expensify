
/** sets the text filter
 * @param { string } text
 */
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
})

/** sets the sort by property to amount 
 */
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
})

/** sets the sort by property to date
 */
export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
})

/** sets the filter start date
 * @param { number } startDate 
 */
export const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
});

/** sets the filter end date
 * @param { number } endDate 
 */
export const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
});