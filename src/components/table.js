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
        terrain,
        url,
        population,
      } = planet;
      return (
        <tr key={ name }>
          <td>{name}</td>
          <td>{climate}</td>
          <td>{created}</td>
          <td>{diameter}</td>
          <td>{edited}</td>
          <td>{films}</td>
          <td>{gravity}</td>
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

  const changeHandler = (target) => {
    console.log(target.value);
    const filtered = contextValue.filter((item) => item.name.includes(target.value)); // falta fazer alguma coisa com esse filtro.
    console.log(filtered);
    renderRow(filtered);
  };
  return (
    <div>
      <div>
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            name="search"
            data-testid="name-filter"
            placeholder="Digite aqui"
            onChange={ ({ target }) => changeHandler(target) }
          />
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>Climate</th>
            <th>Created</th>
            <th>Diameter</th>
            <th>Edited</th>
            <th>Films</th>
            <th>Gravity</th>
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
