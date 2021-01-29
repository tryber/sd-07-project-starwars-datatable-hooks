import React from 'react';
import Table from './components/Table';
import WarsProvider from './context/WarsProvider';
import SearchByName from './components/SearchByName';
import SelectedFilter from './components/SelectedFilter';

function App() {
  return (
    <WarsProvider>
      <SearchByName />
      <SelectedFilter />
      <Table />
    </WarsProvider>
  );
}

export default App;
