/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, getApi, searchName, filterByNumericValues, filterByFilter } = useContext(
    StarWarsContext,
  );

  useEffect(() => {
    getApi();
  }, []);

  const handleFilter = () => {
    let check = data;
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        check = data.filter((col) => parseInt(col[column], 10) > parseInt(value, 10));
      }
      if (comparison === 'menor que') {
        check = data.filter((col) => parseInt(col[column], 10) < parseInt(value, 10));
      }
      if (comparison === 'igual a') {
        check = data.filter((col) => parseInt(col[column], 10) === parseInt(value, 10));
      }
    });

    return check;
  };

  useEffect(() => {
    handleFilter();
    filterByFilter();
  }, [filterByNumericValues]);

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>climate</th>
          <th>created</th>
          <th>diameter</th>
          <th>edited</th>
          <th>films</th>
          <th>gravity</th>
          <th>orbital_period</th>
          <th>population</th>
          <th>rotation_period</th>
          <th>surface_water</th>
          <th>terrain</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {handleFilter()
          .filter((planet) => planet.name.toLowerCase()
            .includes(searchName.toLowerCase()))
          .map((planet, i) => (
            <tr key={ i }>
              <td>{planet.name}</td>
              <td>{planet.climate}</td>
              <td>{planet.created}</td>
              <td>{planet.diameter}</td>
              <td>{planet.edited}</td>
              <td>{planet.films}</td>
              <td>{planet.gravity}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.population}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.terrain}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
