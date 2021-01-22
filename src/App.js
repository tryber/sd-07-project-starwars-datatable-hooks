import React from 'react';
import ApiContextProvider from './Context/ApiContextProvider';
import Table from './Components/Table';
import Filter from './Components/Filter';

function App() {
  return (
    <ApiContextProvider>
      <Table />
      <Filter />
    </ApiContextProvider>
  );
}

export default App;
