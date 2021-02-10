import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Filter from './components/Filter';
import Provider from './context/Provider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <Provider>
          <Filter />
          <Table />
        </Provider>
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
