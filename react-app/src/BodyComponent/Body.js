import './Body.css';
import React from 'react';
import Database from './FakeDatabase';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: this.props.auth
    }
    // auth not working yet
  }

  // <p> elements just to test css
  render() {
    this.fakeFoodInfo = new Database();
    this.cards = this.fakeFoodInfo.getCards();

    return ( <div className="body">
        <p>{JSON.stringify(this.cards)}</p>
      </div>
    );
  }
}

export default Body;