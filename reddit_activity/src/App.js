import React, { Component } from 'react';
import './App.css';
import Main from './components/main.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>REDDIT ACTIVITY</h1>
        <Main />
      </div>
    );
  }
}

export default App;
