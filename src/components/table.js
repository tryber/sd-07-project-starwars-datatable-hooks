import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const zero = 0;
  const [elements, setElements] = useState([]);
  const [column, setColumn] = useState('');
  const [comp, setComparador] = useState('');
  const [num, setSearchValue] = useState(zero);
  const contextValue = useContext(StarWarsContext);

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
          <td>{planet.orbital_period}</td>
          <td>{population}</td>
          <td>{planet.rotation_period}</td>
          <td>{climate}</td>
          <td>{created}</td>
          <td>{diameter}</td>
          <td>{edited}</td>
          <td>{films}</td>
          <td>{gravity}</td>
          <td>{planet.surface_water}</td>
          <td>{terrain}</td>
          <td>{url}</td>
        </tr>
      );
    });

    setElements(elementList);
  };

  useEffect(() => {
    renderRow(contextValue);
  }, [contextValue]);

  const handleClick = () => {
    let filtered = [];
    console.log(column, comp, num);
    if (comp === 'igual') {
      filtered = contextValue.filter((item) => parseInt(item[column], 10) === num);
    }
    if (comp === 'maior') {
      filtered = contextValue.filter((item) => parseInt(item[column], 10) > num);
    }
    if (comp === 'menor') {
      filtered = contextValue.filter((item) => parseInt(item[column], 10) < num);
    }
    renderRow(filtered);
    console.log(filtered);
  };
  const changeHandler = (target) => {
    const filtered = contextValue.filter((item) => item.name.includes(target.value));

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
        <label htmlFor="class_selection">
          <select
            id="class_selection"
            name="class_selection"
            data-testid="column-filter"
            onChange={ ({ target }) => setColumn(target.value) }
          >
            <option>Selecione</option>
            <option value="population">Population </option>
            <option value="orbital_period">Orbital Period</option>
            <option value="diameter">Diameter</option>
            <option value="rotation_period">Rotation Period</option>
            <option value="surface_water">Surface Water</option>
          </select>
        </label>
        <label htmlFor="comp">
          <select
            id="comp"
            name="comp"
            data-testid="comparison-filter"
            onChange={ ({ target }) => setComparador(target.value) }

          >
            <option>Selecione</option>
            <option value="maior">Maior que</option>
            <option value="menor">Menor que</option>
            <option value="igual">Igual a</option>
          </select>
        </label>
        <label htmlFor="search_value">
          <input
            type="number"
            id="search_value"
            name="search_value"
            data-testid="value-filter"
            onChange={ ({ target }) => setSearchValue(target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => handleClick() }
        >
          Filtrar
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>Orbital Period</th>
            <th>Population</th>
            <th>Rotation Period</th>
            <th>Climate</th>
            <th>Created</th>
            <th>Diameter</th>
            <th>Edited</th>
            <th>Films</th>
            <th>Gravity</th>
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
