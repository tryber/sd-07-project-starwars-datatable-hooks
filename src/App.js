import React from 'react';
import './App.css';
import { StarWarsStorege } from './context/StarWarsContext';
import Table from './components/Table';

function App() {
  return (
    <StarWarsStorege>
      <Table />
    </StarWarsStorege>

  );
}

export default App;
