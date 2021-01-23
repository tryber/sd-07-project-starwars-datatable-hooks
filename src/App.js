import React from 'react';
import Provider from './context/Provider';
import './App.css';
import { Header, Filters, Table } from './components';

function App() {
  return (
    <Provider>
      <Header />
      <Filters />
      <Table />
    </Provider>
  );
}

export default App;
