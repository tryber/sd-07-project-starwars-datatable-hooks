import React from 'react';
import StarWarsProvider from './context/StarWarsContext';
import './App.css';
import Table from './components/Table';
import FilterName from './components/FilterName';

function App() {
  return (
    <StarWarsProvider>
      <div className="App" />
      <FilterName />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
