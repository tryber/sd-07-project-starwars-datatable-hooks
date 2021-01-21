import React from 'react';
import Provider from './context/Provider';
import './App.css';
import { Header, Table } from './components';

function App() {
  return (
    <Provider>
      <Header />
      <Table />
    </Provider>
  );
}

export default App;
