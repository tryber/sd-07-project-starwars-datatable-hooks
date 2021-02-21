import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import StarWarsContext from '../context/StarWarsContext';
import PlanetsForm from './PlanetsForm';

function PlanetsTable() {
  const { planetsArray, keysFiltered } = useContext(StarWarsContext);
  const zero = 0;
  if (planetsArray.length > zero) {
    return (
      <div>
        <PlanetsForm />
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              {keysFiltered.map((planetsKey) => (
                <th
                  key={ planetsKey.name }
                >
                  {planetsKey}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </Table>
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
