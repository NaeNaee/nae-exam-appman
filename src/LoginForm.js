import React from 'react';
import logo from './logo.svg';

class LoginForm extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleLogin = () => {
        this.props.onSubmit({
            email: this.state.userName,
            password: this.state.password
        });
    }

    handleChange = (prop, val) => {
        this.setState(prevState => ({
            [prop]: val
        }));
    }

    render() {
        const waitClass = this.props.fetching ? 'logo-spin' : '';
        const error = this.props.error ? <span className='app-error'>{this.props.error}</span> : ''

        return (
            <div>
                <div className='logo'>
                    <img src={logo} className={"app-logo " + waitClass} alt="logo" />
                </div>

                Email address
                <br />
                <input type='text'
                    className='app-input'
                    placeholder='example@mail.com'
                    value={this.state.userName}
                    onChange={(e) => this.handleChange('email', e.target.value)} />

                <br />

                Password
                <br />
                <input type='password'
                    className='app-input'
                    placeholder='your password'
                    value={this.state.password}
                    onChange={(e) => this.handleChange('password', e.target.value)} />

                <br />
                <br />
                {error}
                <br />
                <br />

                <div className='login'>
                    <button className='app-button' onClick={this.handleLogin}>
                        SIGN IN
                    </button>
                </div>

                <br />
                <br />

                <div className='app-forgot'>
                    <a className='app-a'>Forgot password ?</a>
                    <a className='app-a app-right'>Create a new account</a>
                </div>
            </div>
        );
    }
}

export default LoginForm;