import React from 'react';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <SearchBar />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
