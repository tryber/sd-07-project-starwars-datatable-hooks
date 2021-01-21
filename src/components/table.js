import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const [elements, setElements] = useState([]);
  const contextValue = useContext(StarWarsContext);
  console.log(contextValue);
  const renderRow = (planetList) => {
    const elementList = planetList.map((planet) => {
      const {
        climate,
        created,
        diameter,
        edited,
        films,
        gravity,
        name,
        // surface_water,
        terrain,
        url,
        // rotation_period,
        // orbital_period,
        population,
      } = planet;
      return (
        <tr key={ name }>
          <td>{climate}</td>
          <td>{created}</td>
          <td>{diameter}</td>
          <td>{edited}</td>
          <td>{films}</td>
          <td>{gravity}</td>
          <td>{name}</td>
          <td>{planet.surface_water}</td>
          <td>{terrain}</td>
          <td>{url}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{population}</td>
        </tr>
      );
    });

    console.log(elementList);
    setElements(elementList);
  };

  useEffect(() => {
    renderRow(contextValue);
  }, [contextValue]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Climate</th>
            <th>Created</th>
            <th>Diameter</th>
            <th>Edited</th>
            <th>Films</th>
            <th>Gravity</th>
            <th>name</th>
            <th>Orbital Period</th>
            <th>Population</th>
            <th>Rotation Period</th>
            <th>Surface Water</th>
            <th>Terrain</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {elements}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
