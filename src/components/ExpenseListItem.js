import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

numeral.register('locale', 'en-gb', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal: function (number) {
        var b = number % 10;
        return (~~ (number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
    },
    currency: {
        symbol: '£'
    }
})
numeral.locale('en-gb')

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
    <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
    </Link>
    <p>
    {numeral(amount / 100).format('$0,0.00')} 
    -
    {moment(createdAt).format('Do MMMM YYYY')}
    </p>
    </div>
)

export default ExpenseListItem