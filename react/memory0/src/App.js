import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function CoolComponent({ adjective = 'Cool' }) {
  return <p>Youpi So {adjective} !</p>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <CoolComponent adjective="Incredible" />
          <CoolComponent />
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
