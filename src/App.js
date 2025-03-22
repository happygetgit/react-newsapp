// import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  c = "John";
  render() {
    return (
      <div>
        <h1>hello my first class component {this.c}</h1>
      </div>
    );
  }
}
