import React from 'react'
import Modal from 'react-modal'
import { startLoginEmail, startEmailSignup } from '../actions/auth'

class EmailModal extends React.Component {
    state = {
        mode: 'LOGIN',
        error: ''
    }
    toConsole = (e) => {
        e.preventDefault()
        if (this.state.mode === 'LOGIN') {
            const email = e.target.email.value
            const password = e.target.password.value
            // console.log(email, password)
            startLoginEmail(email, password)
            .catch((e) => {
                if (e.code === 'auth/user-not-found') {
                    this.setState({ error: 'User not found. Create account or try again.'})
                } else if (e.code === 'auth/wrong-password') {
                    this.setState({error: 'You entered the wrong password. Try again.'})
                } else if (e.code === 'auth/too-many-requests') {
                    this.setState({error: 'You have attempted to login too many times. Try again later.'})
                } else if (e.code === 'auth/invalid-email') {
                    this.setState({error: 'Enter a valid email address.'})
                }
                else {
                    this.setState({error: e.code})
                }
            })
        } else if (this.state.mode === 'CREATE') {
            const email = e.target.email.value
            const password = e.target.password.value
            startEmailSignup(email, password)
            .catch((e) => {
                this.setState({error: e.code})
            })
        }
    }
    onModeChange = (e) => {
        const mode = e.target.value
        this.setState({ mode })
    }
    render() {
        return (
            <Modal
                isOpen={!!this.props.emailPrompt}
                onRequestClose={this.props.handleClearEmailPrompt}
                contentLabel="Email Sign up"
                closeTimeoutMS={200}
                className='modal'
                appElement={app}
            >
                <h3 className='modal__title'>Please enter your email and chosen password.</h3>
                {this.state.error && <p className='form__error'>{this.state.error}</p>}
                <div>
                    <div className="input-group modal-input">
                    <select className="button"
                        onChange={this.onModeChange}
                    >
                        <option value="LOGIN">Login</option>
                        <option value="CREATE">Create Account</option>
                    </select>
                    </div>
                    <form className="form modal-input"
                        // onSubmit={props.startLoginEmail(this.state.mode, {})}
                        onSubmit={this.toConsole}
                    >
                        <input type='email' id='email' placeholder='you@example.com' autoComplete='true' />
                        <input type='password' id='password' placeholder='Password' minLength='6' autoComplete='true' />
                        <button>Submit</button>
                    </form>
                </div>
            </Modal>
        )
    }
}

export default EmailModal