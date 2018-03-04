import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

import ExpenseForm from './expense-form';

describe('ExpenseForm Component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render an expense in edit mode', () => {
    const expense = {
      id: '3',
      description: 'Credit Card',
      note: '',
      amount: 4500,
      createdAt: moment(0).add(4, 'days').valueOf(),
    };

    const wrapper = shallow(<ExpenseForm expense={expense} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();

    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });

    expect(wrapper.state('error')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  test('should set description onChange', () => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
      target: { value },
    });
    expect(wrapper.state('description')).toBe(value);
    // expect(wrapper).toMatchSnapshot();
  });

  test('should set note on textarea change', () => {
    const value = 'new note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
      target: { value },
    });
    expect(wrapper.state('note')).toBe(value);
    // expect(wrapper).toMatchSnapshot();
  });

  test('should set amount if valid input', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
      target: { value },
    });

    expect(wrapper.state('amount')).toBe(value);
  });

  test('should not set amount if invalid input', () => {
    const value = '12.222';
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('input').at(1).simulate('change', {
      target: { value },
    });

    expect(wrapper.state('amount')).toBe('0.00');
  });

  test('should call onSubmit prop for valid form submission', () => {
    const expense = {
      id: '3',
      description: 'Credit Card',
      note: '',
      amount: 4500,
      createdAt: moment(0).add(4, 'days').valueOf(),
    };

    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expense} onSubmit={onSubmitSpy} />);

    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    expect(wrapper.state('error')).toBe(false);
    // id has been removed
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      description: 'Credit Card',
      note: '',
      amount: 4500,
      createdAt: moment(0).add(4, 'days').valueOf(),
    });
  });

  test('should set new date on date chnage', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);

    // both of these line get access to SingleDate Picker
    // wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toBe(now);
  });

  test('should set calender focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });
    expect(wrapper.state('calenderFocused')).toBe(focused);
  });
});
