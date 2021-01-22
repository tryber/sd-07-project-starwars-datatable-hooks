import React from 'react';
import Table from './components/Table';
import './App.css';
import StarWarsProvider from './context/StartWarsProvider';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <StarWarsProvider>
      <SearchBar />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
