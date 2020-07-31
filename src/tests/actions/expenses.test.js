import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({ id, description, note, createdAt, amount }) => {
        expensesData[id] = { description, note, amount, createdAt }
    })
    database.ref('expenses').set(expensesData).then(() => done())
})

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should remove expenses from firebase and store', (done) => {
    const store = createMockStore({})
    const id = expenses[2].id
    store.dispatch(startRemoveExpense({ id })).then(() => {
        database.ref(`expenses/${id}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toEqual(null)
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'REMOVE_EXPENSE',
                id
            })
            done()
        })
    })
})

test('should set up edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note value' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'New note value' }
    })
})

test('should edit expenses from firebase and store', (done) => {
    const store = createMockStore({})
    const id = expenses[2].id
    const updates = {
        note: 'This month was more expensive',
        amount: 45000,
    }
    const updatedExpense = {
        ...expenses[2],
        ...updates
    }
    delete updatedExpense.id
    store.dispatch(startEditExpense(id, updates)).then(() => {
        database.ref(`expenses/${id}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toEqual(updatedExpense)
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'EDIT_EXPENSE',
                id,
                updates
            })
            done()
        })
    })
})

test('should set up add expense action object with provided values', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({})
    const defaultExpenseData = {
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultExpenseData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultExpenseData)
        done()
    })
})

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({})
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})
