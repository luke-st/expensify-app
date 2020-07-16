import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense, history, wrapper, removeExpense

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditExpensePage 
            expense={expenses[1]} 
            history={history}
            editExpense={editExpense} 
            removeExpense={removeExpense}
        />
    )
})

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1], expenses[1].id)
    expect(history.push).toHaveBeenLastCalledWith('/')
})

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click')
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[1].id)
    expect(history.push).toHaveBeenLastCalledWith('/')
})