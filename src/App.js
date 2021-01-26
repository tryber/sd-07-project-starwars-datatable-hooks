import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import StarWarsProvider from './context/StartWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <SearchBar />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
