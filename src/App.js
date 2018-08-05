import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    function formatName(user) {
      if (user) {
        return user.firstName + ' ' + user.lastName;
      }
        return <h1>Hello, Stranger.</h1>;
    }
    const user = {
      firstName: 'Harper',
      lastName: 'Perez'
    };
    const element = (
      <h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </h1>
    );
    const element_children = (
        <div>
          <h1>Hello!</h1>
          <h2>Good to see you here.</h2>
        </div>
    );
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {element}
          {element_children}
        </p>
      </div>
    );
  }
}

export default App;
