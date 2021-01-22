import React from 'react';
import Provider from './Provider';
import { Table, Search, Filter } from './components';
import './App.css';

function App() {
  return (
    <Provider>
      <Search />
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
