import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters'
import moment from 'moment'

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})

test('should generate sort by amount action object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should generate sort by date action object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should generate set text filter action object with provided string', () => {
    const action = setTextFilter('this is a test filter')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'this is a test filter'
    })
})

test('should generate set text filter action object with default string (empty)', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})