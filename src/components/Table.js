import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import SelectFilters from './SelectFilters';

function StarWarsPlanetsTable() {
  return (
    <main>
      <SelectFilters />
      <table border="1">
        <TableHead />
        <TableBody />
      </table>
    </main>
  );
}

export default StarWarsPlanetsTable;
