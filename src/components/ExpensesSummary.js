import React from 'react'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'

export const ExpensesSummary = (props) => (
    <div className='page-header'>
        <div className='content-container'>
            <h1 className='page-header__title'>Viewing <span>{props.expenseCount}</span> {props.expenseCount === 1 ? 
                    'expense' 
                    : 
                    'expenses'} totalling <span>{props.expensesTotal}</span></h1>
            <div className='page-header__actions'>
            <Link className='button' to="/create">Add Expense</Link>
            </div>
        </div>
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