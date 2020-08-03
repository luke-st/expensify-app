import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let startEditExpense, history, wrapper, onRemove

beforeEach(() => {
    startEditExpense = jest.fn()
    onRemove = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditExpensePage
            expense={expenses[1]}
            history={history}
            startEditExpense={startEditExpense}
            onRemove={onRemove}
        />
    )
})

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1], expenses[1].id)
    expect(history.push).toHaveBeenLastCalledWith('/')
})