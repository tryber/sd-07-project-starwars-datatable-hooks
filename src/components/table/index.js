import React, { useContext } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import StarWarsContext from '../../context/StarWarsContext';

function Table() {
  const { planets, filters: { filterByName: { name } } } = useContext(StarWarsContext);
  const newFilter = (key) => key.name.includes(name);

  return (
    <table>
      <TableHead />
      <tbody>
        {planets.filter(newFilter)
          .map((planet) => <TableBody key={ planet.name } data={ planet } />)}
      </tbody>
    </table>
  );
}

export default Table;
