import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const zero = 0;
  const [elements, setElements] = useState([]);
  const [coluna, setColuna] = useState('');
  const [comp, setComparador] = useState('');
  const [num, setSearchValue] = useState(zero);
  const { context } = useContext(StarWarsContext);
  const { planetList } = context;
  // if (context) {
  // const { filterByNumericValues } = filters;
  // const { column, comparison, value } = filterByNumericValues;
  // }

  const renderRow = (list) => {
    const elementList = list.map((planet) => {
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
    renderRow(planetList);
  }, [context, planetList]);

  const handleClick = () => {
    let filtered = [];
    console.log(coluna, comp, num);
    if (comp === 'igual a') {
      filtered = planetList
        .filter((item) => parseInt(item[coluna], 10) === parseInt(num, 10));
    }
    if (comp === 'maior que') {
      filtered = planetList
        .filter(

          (item) => (parseInt(item[coluna], 10)) > num && item[coluna] !== 'unknown',
        );
    }
    if (comp === 'menor que') {
      filtered = planetList
        .filter(
          (item) => (parseInt(item[coluna], 10)) < num && item[coluna] !== 'unknown',
        );
    }
    // setContext({
    //   ...context, filters: { ...filterByNumericValues[0], column: coluna, comparison: comp, value: num }
    // })
    // console.log(filtered)
    renderRow(filtered);
  };

  const changeHandler = (target) => {
    const filtered = planetList.filter((item) => item.name.includes(target.value));
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
            onChange={ ({ target }) => setColuna(target.value) }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="comp">
          <select
            id="comp"
            name="comp"
            data-testid="comparison-filter"
            onChange={ ({ target }) => setComparador(target.value) }

          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
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
            <th>Name</th>
            <th>Orbital Period</th>
            <th>Population</th>
            <th>Rotation_period</th>
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
