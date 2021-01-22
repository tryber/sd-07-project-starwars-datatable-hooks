import React from 'react';
import './App.css';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';
import SearchBar from './components/SearchBar';
import FilterByNumber from './components/FilterByNumber';

function App() {
  return (
    <StarWarsProvider>
      <SearchBar />
      <FilterByNumber />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
