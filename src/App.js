import React from 'react';
import Provider from './Provider';
import { Table, Search, Filter, ListFilters, Order } from './components';
import './App.css';

function App() {
  return (
    <Provider>
      <Search />
      <Filter />
      <ListFilters />
      <Order />
      <Table />
    </Provider>
  );
}

export default App;
