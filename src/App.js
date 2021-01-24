import React from 'react';
import Provider from './Provider';
import { Table, Search, Filter, ListFilters } from './components';
import './App.css';

function App() {
  return (
    <Provider>
      <Search />
      <Filter />
      <ListFilters />
      <Table />
    </Provider>
  );
}

export default App;
