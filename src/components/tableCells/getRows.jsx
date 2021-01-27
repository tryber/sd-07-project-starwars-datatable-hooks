import React from 'react';
import getCells from './getCells';

function getRows(value) {
  const planets = Object
    .entries(value)
    .map((each) => each[1]);
  const listOfRows = [];

  planets.forEach((planet, index) => {
    listOfRows.push(
      <tr key={ `row-${index}` }>
        {getCells(Object.values(planet))}
      </tr>,
    );
  });
  return listOfRows;
}

export default getRows;
