import React from 'react';
import { StarWarsContext } from './context/StarWarsContext';
import { Filters, Table } from './components/index';
import './App.css';

function App() {
  return (
    <div>
      <Filters />
      <Table />
    </div>

  );
}

export default App;
