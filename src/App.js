import React from 'react';
import Table from './components/Table';
import WarsProvider from './context/WarsProvider';
import SearchByName from './components/SearchByName';

function App() {
  return (
    <WarsProvider>
      <SearchByName />

      <Table />
    </WarsProvider>
  );
}

export default App;
