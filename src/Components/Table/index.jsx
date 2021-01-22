import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../../Context/StarWarsContext';

import sortElements from '../../helpers/sortElements';

const Table = () => {
  const { filteredData, column, sort } = useContext(StarWarsContext);
  const [headers, setHeaders] = useState([]);
  const empty = 0;

  useEffect(() => {
    if (filteredData.length !== empty) {
      setHeaders(Object.keys(filteredData[0]));
    }
  }, [filteredData]);

  if (filteredData.length !== empty && headers.length !== empty) {
    return (
      <>
        <h1>Table</h1>
        <table>
          <thead>
            <tr>
              {
                headers.map((header) => (
                  header !== 'residents' && <th key={ header }>{header}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              sortElements(filteredData, column, sort).map((planet) => (
                <tr key={ planet.name }>
                  <td data-testid="planet-name">{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.surface_water}</td>
                  <td>{planet.population}</td>
                  <td>{planet.films}</td>
                  <td>{planet.created}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.url}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </>
    );
  }

  return <h1>Loading...</h1>;
};

export default Table;
