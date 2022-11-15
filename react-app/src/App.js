import Body from "./BodyComponent/Body";
import Header from "./HeaderComponent/Header";
import Footer from "./FooterComponent/Footer";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: false
    }
  }

  render() {
    return (
      <>
        <Header auth={this.state.auth} gettingLogin={false} gettingSignup={false} sendAuth={this.setAuth}/>
        <Body auth={this.state.auth}/>
        <Footer auth={this.state.auth} adding={false} sendAuth={this.setAuth}/>
      </>
    );
  }

  setAuth(newAuth) {
    alert(JSON.stringify(this.state.auth));
    this.setState({
      auth: newAuth
    });
  }

}

export default App;