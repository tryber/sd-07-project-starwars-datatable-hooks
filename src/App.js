import React from 'react';
import './App.css';
import NameFilter from './components/NameFilter';
import NumbersFilter from './components/NumbersFilter';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <NameFilter />
      <NumbersFilter />
      <Table />
    </Provider>
  );
}

export default App;
