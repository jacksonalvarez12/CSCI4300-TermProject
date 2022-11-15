import './Body.css';
import React from 'react';
import Database from './FakeDatabase';
import Card from '../CardComponent/Card';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.fakeFoodInfo = new Database();
    this.state = {
      auth: this.props.auth,
      cards: this.fakeFoodInfo.getCards()
    }
    // auth not working yet
  }

  render() {
    this.setState({
      cards: this.fakeFoodInfo.getCards()
    });
    let cardsHTML = this.state.cards.map((card) =>
      <Card auth={this.state.auth} id={card.id} src={card.img} title={card.title} ingredients={card.ingredients} link={card.link}/>
    );
    
    return (<div className="body" id="card-container">
        {cardsHTML}
      </div>
    );
  }
}

export default Body;