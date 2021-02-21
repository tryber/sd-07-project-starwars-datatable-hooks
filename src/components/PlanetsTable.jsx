import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import PlanetsForm from './PlanetsForm';

function PlanetsTable() {
  const { planetsArray, keysFiltered } = useContext(StarWarsContext);
  const zero = 0;
  if (planetsArray.length > zero) {
    return (
      <div>
        <PlanetsForm />
        <table className="tabela">
          <thead>
            <tr>
              {keysFiltered.map((planetsKey) => (
                <th
                  className="table-head"
                  key={ planetsKey.name }
                >
                  {planetsKey}
                </th>
              ))}
            </tr>
          </thead>
          {planetsArray.map((planet) => (
            <tr key={ planet }>
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
          ))}
        </table>
      </div>
    );
  }
  return (
    <div>
      <PlanetsForm />
    </div>
  );
}

export default PlanetsTable;
