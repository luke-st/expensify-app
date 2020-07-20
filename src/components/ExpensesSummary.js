import React from 'react'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import { connect } from 'react-redux'
import numeral from 'numeral'

export const ExpensesSummary = (props) => (
    <div>
    <h3>Viewing {props.expenseCount} {props.expenseCount === 1 ? 
            'expense' 
            : 
            'expenses'} totalling {props.expensesTotal}</h3>
    </div>
)

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: numeral(selectExpensesTotal(visibleExpenses) / 100).format('$0,0.00')
    }
}

export default connect(mapStateToProps)(ExpensesSummary)