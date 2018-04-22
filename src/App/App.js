import React, { Component } from "react";
import "./App.css";
import TopNav from "containers/TopNav/TopNav";
// import { Grid } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
      </div>
    );
  }
}

export default App;
