import './Footer.css';
import React from 'react';

export default class Footer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            adding: this.props.adding
        }
    }

    render() {
        let addingHTML = <button onClick={() => this.add()}>Add New Recipe</button>;
        if (this.state.adding) {
            addingHTML = <>
                <form>
                    <label for="username-input">Username: </label>
                    <input id="username-input"></input>
                    <label for="password-input">Password: </label>
                    <input id="password-input"></input>
                </form>
                <button onClick={() => this.submitAdd()}>Submit</button>
            </>

        }

        return <footer>
            {addingHTML}
            <p>Created by Colby Eskew, Jackson Alvarez, and Joshua Bisnott</p>
        </footer>
    }

    add() {
        this.setState({
            adding: true
        });
    }

    submitAdd() {
        this.setState({
            adding: false
        });
    }
    
}
