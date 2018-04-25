import React, { Component } from "react";
import "./App.css";
import TopNav from "containers/TopNav/TopNav";
import Portfolio from "components/Portfolio/Portfolio";
import AboutMe from "components/AboutMe/AboutMe";
// import { Grid } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Portfolio />
        <AboutMe />
      </div>
    );
  }
}

export default App;
