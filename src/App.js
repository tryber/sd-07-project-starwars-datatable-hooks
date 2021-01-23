import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import SearchBarName from './components/SearchBarName';

function App() {
  return (
    <Provider>
      <SearchBarName />
      <Table />
    </Provider>
  );
}

export default App;
