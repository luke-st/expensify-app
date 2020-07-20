export default (expenses = []) => {
    const amounts = expenses.map((expense) => expense.amount)
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return amounts.reduce(reducer, 0)
}
