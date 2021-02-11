import React from 'react';
import Provider from './context/Provider';
import FilterByNumeric from './components/FilterByNumeric';
import TablePlanets from './components/TablePlanets';
import FilterByName from './components/FilterByName';
import './App.css';

function App() {
  return (
    <Provider>
      <div>
        Planets - Star Wars
        <FilterByName />
        <FilterByNumeric />
        <TablePlanets />
      </div>
    </Provider>
  );
}

export default App;
