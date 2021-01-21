import React from 'react';
import StarWarsContext from './context/StarWarsContext';
import { Filters, Table } from './components/index';
import './App.css';

function App() {
  return (
    <StarWarsContext.Provider value={{}}>
        <div>
          <Filters />
          <Table />
        </div>
    </StarWarsContext.Provider>

  );
}

export default App;
