import './Header.css';
import '../index.js';
import React from 'react';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: this.props.auth,
            gettingLogin: this.props.gettingLogin,
            gettingSignup: this.props.gettingSignup
        };
    }

    render() {
        this.loginHTML = this.getLogin();

        return <header>
            <a className="home-button" href="/">Home {this.auth}</a>
            {this.loginHTML}
        </header>
    }

    getLogin() {
        if (this.state.auth) {
            return <div className='login-container'>
                <button onClick={() => this.logout()}>Logout</button>
            </div>

        } else if (this.state.gettingLogin) {
            return <div className='login-container'>

                <form>
                    <label for="username-input">Username: </label>
                    <input id="username-input"></input>
                    <label for="password-input">Password: </label>
                    <input id="password-input"></input>
                </form>

                <button onClick={() => this.tryLogin()}>Login</button>
            </div>

        } else if (this.state.gettingSignup) {
            return <div className='login-container'>
                <form>
                    <label for="username-input">Username: </label>
                    <input id="username-input"></input>
                    <label for="password-input">Password: </label>
                    <input id="password-input"></input>
                </form>
                
                <button onClick={() => this.trySignup()}>Sign Up</button>
            </div>

        } else {
            return <div className='login-container'>
                <button onClick={() => this.login()}>Login</button>
                <button onClick={() => this.signup()}>Sign Up</button>
            </div>;
        }
    }

    login() {
        this.setState({
            gettingLogin: true
        });
    }

    signup() {
        this.setState({
            gettingSignup: true
        });
    }

    logout() {
        this.setState({
            auth: false
        });
    }

    trySignup() {
        this.setState({
            auth: true,
            gettingSignup: false
        }); 
    }

    tryLogin() {
        this.setState({
            auth: true,
            gettingLogin: false
        }); 
    }
}

