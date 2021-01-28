import React, { useContext, useEffect, useState } from 'react';
import { StarWarsContext } from '../Context';

function Table() {
  const context = useContext(StarWarsContext);
  const { filters, setFilters } = context;
  const { search } = useContext(StarWarsContext);
  const [planetList, setPlanetList] = useState([]);
  const { filterByName } = filters;

  useEffect(() => {
    setPlanetList(context.data);
    console.log(context);
  },
  [context]);

  // useEffect(() => {
  //   setFilters({ ...filters,
  //     filterByName: {
  //       name: search } });
  // }, [filters, search, setFilters]);

  // const planetListName = {};
  return planetList.length ? (
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
        {context
          .filter((planet) => planet.name
            .includes(filterByName.name
              .toLowerCase()))
          .map((planet) => (
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
              <td>{planet.films[0]}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
    : <div>Loading...</div>;
}

export default Table;
