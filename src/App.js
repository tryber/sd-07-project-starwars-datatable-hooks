import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <SearchBar />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
