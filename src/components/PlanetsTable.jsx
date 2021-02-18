import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import PlanetsForm from './PlanetsForm';

function PlanetsTable() {
  const { response, planetsArray, setPlanets } = useContext(StarWarsContext);
  const { filters: { filterByName: { name } } } = useContext(StarWarsContext);

  useEffect(() => {
    setPlanets(response.filter(({ name: planetName }) => (
      planetName.includes(name)
    )));
  }, [name]);

  // if (name !== '') {
  //   const newArray = response.filter(({ name: planetName }) => (
  //     planetName.includes(name)
  //   ));
  //   setPlanets(newArray);
  // }

  const zero = 0;
  if (response.length > zero) {
    const planetsKeys = Object.keys(response[0]);
    const keysFiltered = planetsKeys.filter((element) => (
      element !== 'residents'
    ));
    return (
      <div>
        <PlanetsForm />
        <table>
          <tr>
            {keysFiltered.map((planetsKey) => (
              <th key={ planetsKey }>{planetsKey}</th>
            ))}
          </tr>
          {planetsArray.map((planet) => (
            <tr key={ planet }>
              <td>{planet.name}</td>
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
  return <div>Loading...</div>;
}

export default PlanetsTable;
