import React from 'react';
import SearchByName from './Components/SearchByName';
import Table from './Components/Table';
import StarWarsContextProvider from './context/StarWarsContextProvider';

function App() {
  return (
    <StarWarsContextProvider>
      <SearchByName />
      <Table />
    </StarWarsContextProvider>
  );
}

export default App;
