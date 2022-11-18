import './Footer.css';
import React from 'react';
import Database from '../BodyComponent/FakeDatabase';
import Card from '../CardComponent/Card';
import ReactDOM from 'react-dom/client';

export default class Footer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            auth: this.props.auth,
            adding: this.props.adding
        }
        this.fakeDatabase = new Database();
    }

    render() {
        let addingHTML = <button onClick={() => this.add()}>Add New Recipe</button>;
        if (this.state.adding) {
            addingHTML = <>
                <form>
                    <div class='add-input-container'>
                        <label for="src-input">Link to Image: </label>
                        <input id="src-input"></input>
                    </div>
                    <div class='add-input-container'>
                        <label for="title-input">Title: </label>
                        <input id="title-input"></input>
                    </div>
                    <div class='add-input-container'>
                        <label for="ingredients-input">Ingredients: </label>
                        <input id="ingredients-input"></input>
                    </div>
                    <div class='add-input-container'>
                        <label for="link-input">Link to Recipe: </label>
                        <input id="link-input"></input>
                    </div>
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
        let srcBox = document.getElementById('src-input');
        let src = srcBox.value.trim();
        let titleBox = document.getElementById('title-input');
        let title = titleBox.value.trim();
        let ingBox = document.getElementById('ingredients-input');
        let ing = ingBox.value.trim();
        let linkBox = document.getElementById('link-input');
        let link = linkBox.value.trim();

        let flag = false;
        if (src === '') {
            srcBox.style.border = 'solid red 1px';
            flag = true;
        } else {
            srcBox.style.border = 'solid black 1px';
        }
        if (title === '') {
            titleBox.style.border = 'solid red 1px';
            flag = true;
        } else {
            titleBox.style.border = 'solid black 1px';
        }
        if (ing === '') {
            ingBox.style.border = 'solid red 1px';
            flag = true;
        } else {
            ingBox.style.border = 'solid black 1px';
        }
        if (link === '') {
            linkBox.style.border = 'solid red 1px';
            flag = true;
        } else {
            linkBox.style.border = 'solid black 1px';
        }
        if (this.checkList(ing).invalid) {
            ingBox.style.border = 'solid red 1px';
            flag = true;
        } else {
            ingBox.style.border = 'solid black 1px';
        }

        if (flag) return;

        let arr = this.checkList(ing).arr;
        let newCard = <Card auth={this.state.auth} id={this.fakeDatabase.incrAndGet()} src={src} title={title} ingredients={arr} link={link}/>;
        let cardContainer = document.getElementById('card-container');
        let allCards = Array.from(cardContainer.childNodes);
        allCards.push(newCard);
        

        this.setState({
            adding: false
        });
    }

    checkList(ings) {
        let ingArray = ings.split(",");
        ingArray = ingArray.map((ing) => ing.trim());
        let flag = false;
        let finalArray = [];
        ingArray.forEach((ing) => {
            if (ing !== '') {
                finalArray.push(ing);
            }
        });  
        if (finalArray.length === 0) {
            flag = true;
        }
        return {invalid: flag, arr: finalArray};
    }
    
}
