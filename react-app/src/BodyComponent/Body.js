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

  render() {
    return (
      <p>This is the body</p>
    );
  }
}

export default Body;