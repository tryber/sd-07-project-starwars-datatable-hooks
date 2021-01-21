import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import FilterSearch from './components/FilterSearch';
import './App.css';

function App() {
  return (
    <Provider>
      <h1>StarWars Datatable</h1>
      <FilterSearch />
      <Table />
    </Provider>
  );
}

export default App;
