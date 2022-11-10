import './Body.css';
import React from 'react';

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
    return (
      <div className="body">
      <p style={{'font-size':'24px'}}>This is the body</p>
      <p style={{'font-size':'24px'}}>This is the body</p>
      <p style={{'font-size':'24px'}}>This is the body</p>
      <p style={{'font-size':'24px'}}>This is the body</p>
      <p style={{'font-size':'24px'}}>This is the body</p>
      <p style={{'font-size':'24px'}}>This is the body</p>
      <p style={{'font-size':'24px'}}>This is the body</p>
      <p style={{'font-size':'24px'}}>This is the body</p>
      <p style={{'font-size':'24px'}}>This is the body</p>
      <p style={{'font-size':'24px'}}>This is the body</p>
      <p style={{'font-size':'24px'}}>This is the body</p>
      <p style={{'font-size':'24px'}}>This is the body</p>
      <p style={{'font-size':'24px'}}>This is the body</p>
      <p style={{'font-size':'24px'}}>This is the body</p>
      </div>
    );
  }
}

export default Body;