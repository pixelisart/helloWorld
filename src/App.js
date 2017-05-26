import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var i = 2;
    var myStyle = {
      fontSize: 20,
      color: '#00ffff'
    };
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h4 style={myStyle}>Hello World!</h4>
        <p>{1+1}</p>
        <p>{i == 1 ? "True" : "False"}</p>
      </div>
    );
  }
}

export default App;