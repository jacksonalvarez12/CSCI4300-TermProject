import './Body.css';
import React from 'react';
import Database from './FakeDatabase';
import Card from '../CardComponent/Card';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: this.props.auth
    }
    // auth not working yet
  }

  render() {
    this.fakeFoodInfo = new Database();
    this.cards = this.fakeFoodInfo.getCards();

    let cardsHTML = this.cards.map((card) =>
      <Card auth={this.state.auth} src={card.img} name={card.name} ingredients={card.ingredients} link={card.link}/>
    );
    
    return (<div className="body">
        {cardsHTML}
      </div>
    );
  }
}

export default Body;