import './Header.css';
import '../index.js';
import React from 'react';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {auth: this.props.auth};

        this.loginHTML = this.getLogin();
    }

    render() {
        return <header>
            <a className="home-button" href="/">Home {this.auth}</a>
            {this.loginHTML}
        </header>
    }

    getLogin() {
        return <div className='login-container'>
                <button onClick={this.login}>Login</button>
                <button>Sign Up</button>
            </div>;
        /*alert(this.state.auth);
        if (this.state.auth) {
            return <p>Logged in</p>;
        } else {
            return <div className='login-container'>
                <button onClick={this.login}>Login</button>
                <button>Sign Up</button>
            </div>;
        }*/
    }

    login() {
        this.setState({
            auth: true
        });
    }
}

