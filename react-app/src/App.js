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
        <Header auth={false} gettingLogin={false} gettingSignup={false}/>
        <Body/>
        <Footer/>
      </>
    );
  }

}

export default App;