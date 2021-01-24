import React, { useContext, useEffect, useState } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const Table = () => {
  const { data, filters, newOptions } = useContext(StarWarsContext);

  const [dataCopy, setDataCopy] = useState([]);

  useEffect(() => {
    setDataCopy(data.filter((element) => (
      element.name.includes(filters.filterByName.name))));
  }, [data, filters.filterByName.name]);

  function filterButton() {
    setDataCopy(dataCopy.filter((element) => {
      const { filterByNumericValues } = filters;
      const { column, comparison, value } = filterByNumericValues[0];
      newOptions(column);
      if (element[column] === 'unknown') return false;
      switch (comparison) {
      case 'maior que':
        return Number(element[column]) > Number(value);
      case 'menor que':
        return Number(element[column]) < Number(value);
      case 'igual a':
        return Number(element[column]) === Number(value);
      default:
        return element;
      }
    }));
  }

  return (
    <>
      <button
        type="button"
        onClick={ filterButton }
        data-testid="button-filter"
      >
        Filtrar
      </button>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {dataCopy.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films.length}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
