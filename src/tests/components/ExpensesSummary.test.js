import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'

test('Should render ExpensesSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} expensesTotal={'£1,141.95'} expenseCount={3} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render ExpensesSummary correctly with only 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[2]]} expensesTotal={'£45.00'} expenseCount={1} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render when no expenses are provided', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[]} expensesTotal={'£0.00'} expenseCount={0} />)
    expect(wrapper).toMatchSnapshot()
})