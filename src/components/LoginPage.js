import React from 'react'
import { connect } from 'react-redux'
import { startLogin, startLoginEmail } from '../actions/auth'
import EmailModal from './EmailModal'

export class LoginPage extends React.Component {
    state = {
        emailPrompt: undefined
    }
    handleEmailPrompt = () => {
        this.setState(() => ({ emailPrompt: true }))
    }
    handleClearEmailPrompt = () => {
        this.setState(() => ({ emailPrompt: undefined }))
    }
    render() {
        return (
            <div>
                <div className="box-layout">
                    <div className="box-layout__box">
                        <h1 className="box-layout__title">Expensify</h1>
                        <p>It's time to get your expenses under control.</p>
                        <div className='form'>
                        <button className="button" id='googleButton' onClick={this.props.startLogin}>Login with Google</button>
                        <button className="button" onClick={this.handleEmailPrompt}>Login/Create Account with Email</button>
                        </div>
                    </div>
                </div>
                <EmailModal 
                    emailPrompt={this.state.emailPrompt}
                    handleClearEmailPrompt={this.handleClearEmailPrompt}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)