import React from 'react';

import FilterByNumeric from '../components/FilterByNumeric';
import FilterByName from '../components/FilterByName';
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
