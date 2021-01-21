import React from 'react';

import { StarWarsProvider } from './context/Provider';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
