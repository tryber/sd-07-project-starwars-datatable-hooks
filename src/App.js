import React from 'react';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import StarWarsProvider from './provider/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <SearchBar />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
