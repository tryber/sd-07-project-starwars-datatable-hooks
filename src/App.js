import React from 'react';
import StarWarsProvide from './context/StarWarsProvider';
import SearchBar from './componentes/SearchBar';
import Table from './componentes/Table';

function App() {
  return (
    <StarWarsProvide>
      <SearchBar />
      <Table />
    </StarWarsProvide>
  );
}

export default App;
