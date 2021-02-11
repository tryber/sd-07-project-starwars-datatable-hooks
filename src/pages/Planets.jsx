import React from 'react';
import FilterByName from '../components/FilterByName';
import FilterByNumeric from '../components/FilterByNumeric';
import TablePlanets from '../components/TablePlanets';

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
