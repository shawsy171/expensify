import moment from 'moment';

import * as actions from './actions';
import filterReducer, { FILTER_REDUCER_DEFAULT } from './reducers';

describe('Filters store', () => {
  test('should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual(FILTER_REDUCER_DEFAULT);
  });

  test('it should set text filter', () => {
    const state = FILTER_REDUCER_DEFAULT;
    const text = 'filter test';
    const action = actions.setTextFilter(text);

    const r = filterReducer(state, action);

    expect(r).toEqual({ ...FILTER_REDUCER_DEFAULT, text });
  });

  test('it should sort by amount', () => {
    const state = FILTER_REDUCER_DEFAULT;
    const action = actions.sortByAmount();

    const r = filterReducer(state, action);

    expect(r).toEqual({ ...FILTER_REDUCER_DEFAULT, sortBy: 'amount' });
  });

  test('it should sort by date', () => {
    const state = { ...FILTER_REDUCER_DEFAULT, sortBy: 'amount' };
    const action = actions.sortByDate();

    const r = filterReducer(state, action);

    expect(r).toEqual({ ...FILTER_REDUCER_DEFAULT, sortBy: 'date' });
  });

  test('it should set start date', () => {
    const state = FILTER_REDUCER_DEFAULT;
    const startDate = moment(1000);
    const action = actions.setStartDate(startDate);

    const r = filterReducer(state, action);

    expect(r).toEqual({ ...FILTER_REDUCER_DEFAULT, startDate });
  });

  test('it should set end date', () => {
    const state = FILTER_REDUCER_DEFAULT;
    const endDate = moment(1000);
    const action = actions.setEndDate(endDate);

    const r = filterReducer(state, action);

    expect(r).toEqual({ ...FILTER_REDUCER_DEFAULT, endDate });
  });
});
