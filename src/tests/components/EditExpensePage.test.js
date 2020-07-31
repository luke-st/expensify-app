import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let startEditExpense, history, wrapper, startRemoveExpense

beforeEach(() => {
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditExpensePage 
            expense={expenses[1]} 
            history={history}
            startEditExpense={startEditExpense} 
            startRemoveExpense={startRemoveExpense}
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

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click')
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[1].id)
    expect(history.push).toHaveBeenLastCalledWith('/')
})