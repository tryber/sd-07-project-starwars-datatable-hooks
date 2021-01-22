import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import filterLoop from '../../helper/filterLoop';

const Table = () => {
  const { dispatch } = useContext(StarWarsContext);

  const {
    state: { data: arrayPlanets },
  } = useContext(StarWarsContext);

  const {
    state: {
      filters: {
        filterByName: { name },
      },
    },
  } = useContext(StarWarsContext);

  const {
    state: {
      filters: { filterByNumericValues: numericFilter },
    },
  } = useContext(StarWarsContext);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets')
      .then((result) => result.json())
      .then((result) => dispatch({ type: 'SET_DATA', data: result.results }));
  }, [dispatch]);

  if (arrayPlanets.length !== 0) {
    const filterByNumeric = filterLoop(numericFilter, arrayPlanets);

    const filteredPlanets = filterByNumeric.filter((elem) => elem.name.includes(name));

    const categories = Object.keys(arrayPlanets[0]).filter(
      (elem) => elem !== 'residents',
    );

    return (
      <table>
        <thead>
          <tr>
            {categories.map((elem) => (
              <th key={ elem }>{elem}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredPlanets.map((elem) => (
            <tr key={ elem.name }>
              <td>{elem.name}</td>
              <td>{elem.rotation_period}</td>
              <td>{elem.orbital_period}</td>
              <td>{elem.diameter}</td>
              <td>{elem.climate}</td>
              <td>{elem.gravity}</td>
              <td>{elem.terrain}</td>
              <td>{elem.surface_water}</td>
              <td>{elem.population}</td>
              <td>{elem.films}</td>
              <td>{elem.created}</td>
              <td>{elem.edited}</td>
              <td>{elem.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return null;
};

export default Table;
