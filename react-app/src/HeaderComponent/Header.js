import './Header.css';
import '../index';
import React from 'react';
import LoginInfo from './FakeData';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: this.props.auth,
            gettingLogin: this.props.gettingLogin,
            gettingSignup: this.props.gettingSignup
        };
        this.fakeLoginInfo = new LoginInfo();
        this.user = '';
    }

    render() {
        this.loginHTML = this.getLogin();
        return <header>
            <a className="home-button" href="/">Home {this.auth}</a>
            <h1>Welcome to the Recipe Hub!</h1>
            {this.loginHTML}
        </header>
    }

    getLogin() {
        if (this.state.auth) {
            return <div className='login-container'>
                <p>Hello <span className='italic'>{this.user}</span></p>
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
        this.props.sendAuth(false);
    }

    trySignup() {
        let userBox = document.getElementById('username-input');
        let user = userBox.value.trim();
        let passBox = document.getElementById('password-input');
        let pass = passBox.value.trim();

        if (user === '' || pass === '') {
            if (user === '') {
                userBox.style.border = 'solid red 1px';
            } else {
                userBox.style.border = 'solid black 1px';
            }
            if (pass === '') {
                passBox.style.border = 'solid red 1px';
            } else {
                passBox.style.border = 'solid black 1px';
            }
            return;
        }

        this.fakeLoginInfo.addLogin(user, pass);
        this.user = user;
        this.setState({
            auth: true,
            gettingSignup: false
        }); 
        this.props.sendAuth(true);
    }

    tryLogin() {
        let userBox = document.getElementById('username-input');
        let user = userBox.value.trim();
        let passBox = document.getElementById('password-input');
        let pass = passBox.value.trim();

        if (user === '' || pass === '') {
            if (user === '') {
                userBox.style.border = 'solid red 1px';
            } else {
                userBox.style.border = 'solid black 1px';
            }
            if (pass === '') {
                passBox.style.border = 'solid red 1px';
            } else {
                passBox.style.border = 'solid black 1px';
            }
            return;
        }

        if (this.fakeLoginInfo.checkLogin(user, pass)) {
            this.user = user;
            this.setState({
                auth: true,
                gettingLogin: false
            }); 
            this.props.sendAuth(true);
        } else {
            alert("Your username or password was incorrect. Please try again.");
            userBox.value = '';
            userBox.style.border = 'solid red 1px';
            passBox.value = '';
            passBox.style.border = 'solid red 1px';
        }
    }
}

