import React from 'react';
import Provider from './context/StarProvider';
import Table from './components/Table';
import InputSearch from './components/InputSearch'
import './App.css';

function App() {
  return (
    <Provider>
      <InputSearch />
      <Table />
    </Provider>
  );
}

export default App;
