import React from 'react';
import './App.css';
import Table from './components/Table';
import Filter from './components/Filter';
import FilterOrder from './components/FilterOrder';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <header>
        <h1>Star Wars Planet</h1>
      </header>
      <Table />
      <Filter />
      <FilterOrder />
    </Provider>
  );
}

export default App;
