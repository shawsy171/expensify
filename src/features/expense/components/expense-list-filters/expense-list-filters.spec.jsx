import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';

// mocks
import { ExpenseListFilters } from './expense-list-filters';
import { filters, altFilters } from './../../../../tests/fixtures/filters';

describe('ExpenseListFilters component ', () => {
  let setTextFilter;
  let sortByAmount;
  let sortByDate;
  let setStartDate;
  let setEndDate;
  let wrapper;

  beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(<ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />);
  });

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render alt data correctly', () => {
    wrapper.setProps({
      filters: altFilters,
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle text change', () => {
    const value = 'text change';
    wrapper.find('input').simulate('change', {
      target: { value, id: 'text' },
    });

    expect(setTextFilter).toHaveBeenLastCalledWith(value);
  });

  test('should sort by date', () => {
    const value = 'date';
    wrapper.setProps({
      filters: altFilters,
    });
    wrapper.find('input').simulate('change', {
      target: { value, id: 'sortBy' },
    });

    expect(sortByDate).toHaveBeenLastCalledWith(value);
  });

  test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('input').simulate('change', {
      target: { value, id: 'sortBy' },
    });

    expect(sortByAmount).toHaveBeenLastCalledWith(value);
  });

  test('should handle date changes', () => {
    const dates = { startDate: moment(0), endDate: moment(1000) };
    wrapper.find(DateRangePicker).prop('onDatesChange')(dates);

    expect(setStartDate).toHaveBeenLastCalledWith(dates.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(dates.endDate);
  });

  test('should handle date focus change', () => {
    const focused = 'startDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(focused);

    expect(wrapper.state('calendarFocused')).toBe(focused);
  });
});
