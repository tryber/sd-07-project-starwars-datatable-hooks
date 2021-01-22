import React from 'react';
import SearchByName from './Components/SearchByName';
import SearchByNumber from './Components/SearchByNumber';
import Table from './Components/Table';
import StarWarsContextProvider from './context/StarWarsContextProvider';

function App() {
  return (
    <StarWarsContextProvider>
      <SearchByNumber />
      <SearchByName />
      <Table />
    </StarWarsContextProvider>
  );
}

export default App;
