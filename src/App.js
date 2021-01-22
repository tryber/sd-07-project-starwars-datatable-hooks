import React from 'react';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import StarWarsProvider from './context/StarWarsProvider';
import FilterNumeric from './components/FilterNumeric';

function App() {
  return (
    <StarWarsProvider>
      <SearchBar />
      <FilterNumeric />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
