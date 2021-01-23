import React from 'react';
import Provider from './context/StarWarsProvider';
import SearchBar from './componentes/SearchBar';
import Table from './componentes/Table';

function App() {
  return (
    <Provider>
      <SearchBar />
      <Table />
    </Provider>
  );
}

export default App;
