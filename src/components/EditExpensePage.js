import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses'
import RemoveModal from './RemoveModal';

export class EditExpensePage extends React.Component {
    state = {
        promptRemove: undefined
    }
    onSubmit = (expense) => {
        this.props.startEditExpense(expense, this.props.expense.id)
        this.props.history.push('/')
    }
    onRemove = () => {
        this.setState(() => ({ promptRemove: true }))
    }
    onRemoveConfirm = () => {
        this.props.startRemoveExpense(this.props.expense.id)
        this.props.history.push('/')
    }
    handleClearPromptRemove = () => {
        this.setState(() => ({ promptRemove: undefined }))
    }
    render() {
        return (
            <div>
                <div className='page-header'>
                    <div className='content-container'>
                        <h1 className='page-header__title'>Edit Expense</h1>
                    </div>    
                </div>
                <div className='content-container'>
                    <ExpenseForm 
                        expense={this.props.expense}
                        onSubmit={this.onSubmit} 
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
                </div>
                <div>
                <RemoveModal 
                    promptRemove={this.state.promptRemove}
                    handleClearPromptRemove={this.handleClearPromptRemove}
                    onRemoveConfirm={this.onRemoveConfirm}
                />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (expense, id) => dispatch(startEditExpense(id, { ...expense })),
    startRemoveExpense: (id) => dispatch(startRemoveExpense({ id }))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)