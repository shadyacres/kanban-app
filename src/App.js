import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NotesApp from './components/NotesApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kanban App</h1>
        </header>
        <NotesApp />
      </div>
    );
  }
}

export default App;
