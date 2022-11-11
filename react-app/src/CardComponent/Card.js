import './Card.css';
import React from 'react';


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: this.props.auth,
      src: this.props.src,
      title: this.props.title,
      ingredients: this.props.ingredients,
      link: this.props.link
    }
    // auth not working yet
  }

  render() {
    let ingsHTML = this.state.ingredients.map((ing) => {
        <li>{ing}</li>
    });
    return ( 
        <div className='card'>
        <img src={this.state.src} alt={this.state.title}/>
        <h1>{this.state.title}</h1>
        <ul>{ingsHTML}</ul>
        <a href={this.state.link}>Link</a>
        </div>
    );
  }
}

export default Card;