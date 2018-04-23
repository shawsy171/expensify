import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from './expense-summary';

describe('Expense Summary', () => {

    test('should show 1 expense message', () => {
        const wrapper = shallow(<ExpenseSummary expenseTotal={12345} expenseCount={1} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show multiple expenses message', () => {
        const wrapper = shallow(<ExpenseSummary expenseTotal={12345} expenseCount={4} />);
        expect(wrapper).toMatchSnapshot();
    });

})
