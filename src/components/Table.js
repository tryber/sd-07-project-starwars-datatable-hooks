import React, { useContext, useEffect, useState } from 'react';

import { StarWarsContext } from '../context/StarWarsContext';
import getPlanets from '../service/starWarsAPI';

function Table() {
  const {
    data,
    setData,
    setFilters,
  } = useContext(StarWarsContext);
  const [results, setResults] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getPlanets();
      setData(response);
      setResults(response.results);
    })();
  }, [setData]);

  const handleFilters = ({ target }) => {
    const filter = target.value;

    setFilters({
      filtersByName: {
        name: filter,
      },
    });

    const filteredPlanets = data.results
      .filter(({ name }) => name.toLowerCase().includes(filter));
    setResults(filteredPlanets);
  };

  return (
    <>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleFilters }
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {results.map((planet) => {
            const {
              name,
              rotation_period: rotationPeriod,
              orbital_period: orbitalPeriod,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: surfaceWater,
              population,
              films,
              created,
              edited,
              url,
            } = planet;
            return (
              <tr key={ name }>
                <td>{name}</td>
                <td>{rotationPeriod}</td>
                <td>{orbitalPeriod}</td>
                <td>{diameter}</td>
                <td>{climate}</td>
                <td>{gravity}</td>
                <td>{terrain}</td>
                <td>{surfaceWater}</td>
                <td>{population}</td>
                <td>{films}</td>
                <td>{created}</td>
                <td>{edited}</td>
                <td>{url}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
