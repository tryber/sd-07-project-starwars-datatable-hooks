import React from 'react';
import Provider from './context/Provider';
import './App.css';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <h1>StarWars</h1>
      <Table />
    </Provider>
  );
}

export default App;
