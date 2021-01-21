import React, { useContext } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import StarWarsContext from '../../context/StarWarsContext';

function Table() {
  const { planets } = useContext(StarWarsContext);
  return (
    <table>
      <TableHead />
      <tbody>
        {planets.map((planet) => <TableBody key={ planet.name } data={ planet } />)}
      </tbody>
    </table>
  );
}

export default Table;
