import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import SearchBarName from './components/SearchBarName';
import DropDownsFilters from './components/DropDownsFilters';

function App() {
  return (
    <Provider>
      <SearchBarName />
      <DropDownsFilters />
      <Table />
    </Provider>
  );
}

export default App;
