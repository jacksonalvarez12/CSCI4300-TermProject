import './Footer.css';
import React from 'react';

export default class Footer extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <footer>
            <div className='add-button' >Add</div>
            <p>Created by Colby Eskew, Jackson Alvarez, and Joshua Bisnott</p>
        </footer>
    }
    
}
