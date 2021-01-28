import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import getCells from './getCells';

function GetRows(value) {
  const { name } = useContext(GlobalContext);
  const planets = Object
    .entries(value)
    .map((each) => (each[1].name.includes(name) ? each[1] : ''));
  const listOfRows = [];

  planets.forEach((planet, index) => {
    if (planet !== '') {
      listOfRows.push(
        <tr key={ `row-${index}` }>
          {getCells(Object.values(planet))}
        </tr>,
      );
    }
  });
  return listOfRows;
}

export default GetRows;
