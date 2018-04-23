import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

// selectors
import selectorExpenses, { selectorExpensesTotal } from './../../store/expense/selectors';

export const ExpenseSummary = ({expenseTotal, expenseCount}) => {

    const formatTotal = (num) => ('£' + numeral(num / 100).format('0,0.00'))
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';

    return (
        <div>
            <h2>Viewing {expenseCount} {expenseWord} totalling {formatTotal(expenseTotal)}</h2>
        </div>
    );
}
const mapStateToProps = state => {
    const visibleExpences = selectorExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpences.length,
        expenseTotal: selectorExpensesTotal(visibleExpences),
    }
}
export default connect(mapStateToProps)(ExpenseSummary);