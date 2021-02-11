import React from 'react';
import Provider from './context/Provider';
import FilterByNumeric from './components/FilterByNumeric';
import TablePlanets from './components/TablePlanets';
import FilterByName from './components/FilterByname';
import './App.css';

function App() {
  return (
    <Provider>
      <div>
        <h5>Planets - Star Wars</h5>
        <FilterByName />
        <FilterByNumeric />
        <TablePlanets />
      </div>
    </Provider>
  );
}

export default App;
