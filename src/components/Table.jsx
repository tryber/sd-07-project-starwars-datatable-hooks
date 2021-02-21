import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import planetsAPI from '../services/planetsAPI';

const Table = () => {
  const { data, setData } = useContext(StarWarsContext);
  const { filters, setFilters } = useContext(StarWarsContext);
  const [filtered, setFiltered] = useState(false);

  useEffect(() => {
    planetsAPI().then((r) => setData(r));
  }, [setData]);

  useEffect(() => {
    if (filters.filterByName.name !== '') {
      setFiltered(true);
    } else {
      setFiltered(false);
    }
    console.log(filtered);
  }, [filtered, filters.filterByName.name]);

  useEffect(() => {
    setTable();
  });

  const setTable = () => {
    if (filtered) {
      const filteredPlanets = data.filter((planet) => (
        planet.name.includes(filters.filterByName.name)
      ));
      return filteredPlanets.length ? filteredPlanets.map((filPlanet, i) => (
        <tr key={ i }>
          <td>{filPlanet.name}</td>
          <td>{filPlanet.rotation_period}</td>
          <td>{filPlanet.orbital_period}</td>
          <td>{filPlanet.diameter}</td>
          <td>{filPlanet.climate}</td>
          <td>{filPlanet.gravity}</td>
          <td>{filPlanet.terrain}</td>
          <td>{filPlanet.surface_water}</td>
          <td>{filPlanet.population}</td>
          <td>residents</td>
          <td>films</td>
          <td>{filPlanet.created}</td>
          {/* format dates */}
          <td>{filPlanet.edited}</td>
        </tr>)) : null;
    }
    return (
      data.map((planet, i) => (
        <tr key={ i }>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>residents</td>
          <td>films</td>
          <td>{planet.created}</td>
          {/* format dates */}
          <td>{planet.edited}</td>
        </tr>
      ))
    );
  };

  return (
    <div>
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
            <th>Residents</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {setTable()}
        </tbody>

      </table>
    </div>
  );
};

export default Table;
