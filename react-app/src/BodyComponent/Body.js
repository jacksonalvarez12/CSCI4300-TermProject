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

    let cardsHTML = this.cards.map((card, index) =>
      <Card auth={this.state.auth} src={card[0]} title={card[1]} ingredients={card[2]} link={card[3]}/>
    );
    
    return (<div className="body">
        {cardsHTML}
      </div>
    );
  }
}

export default Body;