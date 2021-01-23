import React from 'react';
import './App.css';
import NameFilter from './components/NameFilter';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <NameFilter />
      <Table />
    </Provider>
  );
}

export default App;
