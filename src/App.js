import React from 'react';
import './App.css';
import { Provider } from './context/StarWarsContext';
import { Table } from './components';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>

  );
}

export default App;
