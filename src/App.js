import React from 'react';
import './App.css';
import Table from './components/Table';
import Filter from './components/Filter';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <header>
        <h1>Star Wars Planet</h1>
      </header>
      <Table />
      <Filter />
    </Provider>
  );
}

export default App;
