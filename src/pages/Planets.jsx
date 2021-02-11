import React from 'react';
import TablePlanets from '../components/TablePlanets';
import FilterByName from '../components/FilterByName';
import FilterByNumeric from '../components/FilterByNumeric';

function Planets() {
  return (
    <div>
      Planets
      <FilterByName />
      <FilterByNumeric />
      <TablePlanets />
    </div>
  );
}

export default Planets;
