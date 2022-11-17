import './Card.css';
import React from 'react';


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: this.props.auth,
      id: this.props.id,
      src: this.props.src,
      title: this.props.title,
      ingredients: this.props.ingredients,
      link: this.props.link
    }
  }

  render() {
    let ingsHTML = this.state.ingredients.map((ing) =>
        <li>{ing}</li>
    );
    
    return ( 
        <div className='card' id={"card" + this.state.id}>
        <img src={this.state.src} alt={this.state.title}/>
        <h1>{this.state.title}</h1>
        <hr style={{
          color: "#971528",
          backgroundColor: "#971528",
          height: '1px',
          width: '95%',
          borderRadius:'10px',
          border:'1px solid'
        }}
        />
        <ul>{ingsHTML}</ul>
        <a href={this.state.link}>Link to Recipe!</a>
        <div className='card-buttons' id='card-buttons-container'>
          <button id={'view-card' + this.state.id} onClick={() => this.view()}>View</button>
          <button id={'edit-card' + this.state.id} onClick={() => this.edit()}>Edit</button>
          <button id={'delete-card' + this.state.id} onClick={() => this.delete()}>Delete</button>
          <button id={'exit-view-card' + this.state.id} style={{display: 'none'}} onClick={() => this.exitView()}>Exit View</button>
          <button id={'finish-edit-card' + this.state.id} style={{display: 'none'}} onClick={() => this.finishEditing()}>Save and Exit</button>
        </div>
        </div>
    );
  }

  view() {
    let card = document.getElementById('card' + this.state.id);
    card.style.backgroundColor = 'pink';
    card.style.maxWidth = "none";
    card.style.width = '80%';
    
    let box = document.getElementById('card-container');
    let allCards = Array.from(box.childNodes)
    let otherCards = allCards.filter(card => card.id !== 'card' + this.state.id);
    otherCards.forEach(card => card.style.display = 'none');

    document.getElementById('view-card' + this.state.id).style.display = 'none';
    document.getElementById('edit-card' + this.state.id).style.display = 'none';
    document.getElementById('delete-card' + this.state.id).style.display = 'none';
    document.getElementById('exit-view-card' + this.state.id).style.display = 'inline';

  }

  exitView() {
    let card = document.getElementById('card' + this.state.id);
    card.style.backgroundColor = 'rgb(237, 218, 193)';
    card.style.maxWidth = "400px";
    card.style.width = 'auto';

    document.getElementById('view-card' + this.state.id).style.display = 'inline';
    document.getElementById('edit-card' + this.state.id).style.display = 'inline';
    document.getElementById('delete-card' + this.state.id).style.display = 'inline';
    document.getElementById('exit-view-card' + this.state.id).style.display = 'none';

    let box = document.getElementById('card-container');
    let allCards = Array.from(box.childNodes)
    let otherCards = allCards.filter(card => card.id !== 'card' + this.state.id);
    otherCards.forEach(card => card.style.display = 'flex');
  }

  edit() {
    let card = document.getElementById('card' + this.state.id);
    card.style.backgroundColor = 'pink';
    card.style.maxWidth = "none";
    card.style.width = '80%';
    
    let box = document.getElementById('card-container');
    let allCards = Array.from(box.childNodes)
    let otherCards = allCards.filter(card => card.id !== 'card' + this.state.id);
    otherCards.forEach(card => card.style.display = 'none');

    document.getElementById('view-card' + this.state.id).style.display = 'none';
    document.getElementById('edit-card' + this.state.id).style.display = 'none';
    document.getElementById('delete-card' + this.state.id).style.display = 'none';
    document.getElementById('finish-edit-card' + this.state.id).style.display = 'inline';
  }

  finishEdit() {
    
  }

  delete() {
    let box = document.getElementById('card-container');
    box.removeChild(document.getElementById('card' + this.state.id));
  }



}

export default Card;