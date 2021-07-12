import React from "react";
import { hot } from "react-hot-loader";
import "./App.scss";

class App extends React.Component {
  render() {
    console.log("I am here");
    return (
      <div className="App">
        <p>Merhaba Dünya</p>
        <p>Merhaba Dünya 2</p>
      </div>
    );
  }
}
export default hot(module)(App);
