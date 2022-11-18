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
          <div style={{display: 'none'}} className='label-input' id={'img-edit-container' + this.state.id}>
            <label for='img-edit'>Link to Image: </label>
            <input id={'img-edit' + this.state.id}></input>
          </div>
          <img src={this.state.src} alt={this.state.title} id={'img-display' + this.state.id}/>
          <div style={{display: 'none'}} className='label-input' id={'title-edit-container' + this.state.id}>
            <label for='title-edit'>Title: </label>
            <input id={'title-edit' + this.state.id}></input>
          </div>
          <h1 id={'title-display' + this.state.id}>{this.state.title}</h1>
          <hr id={'hr-display' + this.state.id} style={{
            color: "#971528",
            backgroundColor: "#971528",
            height: '1px',
            width: '95%',
            borderRadius:'10px',
            border:'1px solid'
          }}
          />
          <div style={{display: 'none'}} className='label-input' id={'ings-edit-container' + this.state.id}>
            <label for='ings-edit'>Ingredients (Comma Sep. List): </label>
            <input id={'ings-edit' + this.state.id}></input>
          </div>
          <ul id={'ings-display' + this.state.id}>{ingsHTML}</ul>
          <div style={{display: 'none'}} className='label-input' id={'link-edit-container' + this.state.id}>
            <label for='link-edit'>Link to Recipe: </label>
            <input id={'link-edit' + this.state.id}></input>
          </div>
          <a href={this.state.link} target='_blank' id={'link-display' + this.state.id}>Link to Recipe!</a>
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

    document.getElementById('title-display' + this.state.id).style.display = 'none';
    document.getElementById('title-edit-container' + this.state.id).style.display = 'flex';
    document.getElementById('title-edit' + this.state.id).defaultValue = this.state.title;

    document.getElementById('img-display' + this.state.id).style.display = 'none';
    document.getElementById('img-edit-container' + this.state.id).style.display = 'flex';
    document.getElementById('img-edit' + this.state.id).defaultValue = this.state.src;

    document.getElementById('link-display' + this.state.id).style.display = 'none';
    document.getElementById('link-edit-container' + this.state.id).style.display = 'flex';
    document.getElementById('link-edit' + this.state.id).defaultValue = this.state.link;

    document.getElementById('hr-display' + this.state.id).style.display = 'none';

    document.getElementById('ings-display' + this.state.id).style.display = 'none';
    document.getElementById('ings-edit-container' + this.state.id).style.display = 'flex';

    alert(this.state.ingredients);
    let ingsText = this.state.ingredients.join(', ');
    alert(ingsText);
    document.getElementById('ings-edit' + this.state.id).defaultValue = ingsText;

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

  finishEditing() {

    let titleBox = document.getElementById('title-edit' + this.state.id);
    let title = titleBox.value.trim();

    let imgBox = document.getElementById('img-edit' + this.state.id);
    let img = imgBox.value.trim();

    let linkBox = document.getElementById('link-edit' + this.state.id);
    let link = linkBox.value.trim();

    let ingsBox = document.getElementById('ings-edit' + this.state.id);
    let ings = ingsBox.value.trim();


    let flag = false;

    if (title === '') {
      titleBox.style.border = 'solid red 1px';
      flag = true;
    } else {
      titleBox.style.border = 'solid black 1px';
    }

    if (img === '') {
      imgBox.style.border = 'solid red 1px';
      flag = true;
    } else {
      imgBox.style.border = 'solid black 1px';
    }

    if (link === '') {
      linkBox.style.border = 'solid red 1px';
      flag = true;
    } else {
      linkBox.style.border = 'solid black 1px';
    }

    if (this.checkList(ings).invalid) {
      ingsBox.style.border = 'solid red 1px';
      flag = true;
    } else {
      ingsBox.style.border = 'solid black 1px';
    }


    if (!flag) {
      let card = document.getElementById('card' + this.state.id);
      card.style.maxWidth = "400px";
      card.style.width = 'auto';

      let box = document.getElementById('card-container');
      let allCards = Array.from(box.childNodes)
      let otherCards = allCards.filter(card => card.id !== 'card' + this.state.id);
      otherCards.forEach(card => card.style.display = 'flex');

      document.getElementById('title-display' + this.state.id).style.display = 'inline';
      document.getElementById('title-edit-container' + this.state.id).style.display = 'none';

      document.getElementById('img-display' + this.state.id).style.display = 'inline';
      document.getElementById('img-edit-container' + this.state.id).style.display = 'none';

      document.getElementById('link-display' + this.state.id).style.display = 'inline';
      document.getElementById('link-edit-container' + this.state.id).style.display = 'none';

      document.getElementById('ings-display' + this.state.id).style.display = 'inline';
      document.getElementById('ings-edit-container' + this.state.id).style.display = 'none';

      document.getElementById('hr-display' + this.state.id).style.display = 'inline';

      document.getElementById('view-card' + this.state.id).style.display = 'inline';
      document.getElementById('edit-card' + this.state.id).style.display = 'inline';
      document.getElementById('delete-card' + this.state.id).style.display = 'inline';
      document.getElementById('finish-edit-card' + this.state.id).style.display = 'none';


      this.setState({
        title: title,
        src: img,
        link: link,
        ingredients: this.checkList(ings).arr
      });


    }

  }
    

  delete() {
    let box = document.getElementById('card-container');
    box.removeChild(document.getElementById('card' + this.state.id));
  }



}

export default Card;