import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <Provider>
      <h1>StarWars Datatable</h1>
      <Table />
    </Provider>
  );
}

export default App;
