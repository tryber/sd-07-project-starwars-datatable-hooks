import React from 'react';
import Provider from './context/Provider';
import FilterByName from './components/FilterByName';
import FilterByNumeric from './components/FilterByNumeric';
import TablePlanets from './components/TablePlanets';
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
