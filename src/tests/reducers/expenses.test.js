import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([ expenses[0], expenses[2] ])
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            description: 'shopping', 
            note: '', 
            amount: 7942, 
            createdAt: 0,
            id: '4'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses.concat(action.expense))
})

test('should edit an expense with valid id', () => {
    const editedExpense = [{
        ...expenses[2],
        note: 'New updated note'
    }]
    const action = {
        type: 'EDIT_EXPENSE',
        id: '3',
        updates: {
            note: 'New updated note'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[2].note).toBe(action.updates.note)
})

test('should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount: 400000000
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})