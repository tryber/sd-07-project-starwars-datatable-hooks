import React from 'react';
import TablePlanets from '../components/TablePlanets';
import FilterByName from '../components/FilterByname';

function Planets() {
  return (
    <div>
      Planets
      <FilterByName />
      <TablePlanets />
    </div>
  );
}

export default Planets;
