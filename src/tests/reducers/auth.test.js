import authReducer from '../../reducers/auth'

test('should add uid on login', () => {
    const uid = 'test123'
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer(undefined, action)
    expect(state).toEqual({
        uid
    })
})

test('should remove uid on logout', () => {
    const prevState = {
        uid: 'test123'
    }
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer(prevState, action)
    expect(state).toEqual({})
})