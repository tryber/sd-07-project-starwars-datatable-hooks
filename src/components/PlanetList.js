import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetList() {
  const {
    filters,
    setFilter,
    planetsFilter,
    changeSortValues,
    setOrder,
  } = useContext(StarWarsContext);

  const zero = 0;

  const [column, setColumn] = useState('population');
  const [comparison, setCompare] = useState('maior que');
  const [value, setValue] = useState(zero);

  useEffect(() => {
    if (filters.columnToGrab.length > zero) {
      setColumn(filters.columnToGrab[zero]);
    }
  }, [filters.columnToGrab]);

  const filterData = () => {
    const columnsGrabbed = filters.columnToGrab
      .filter((element) => element !== column);

    setFilter(
      {
        ...filters,
        filterValues: [
          ...filters.filterValues,
          {
            column,
            comparison,
            value,
          },
        ],
        columnToGrab: columnsGrabbed,
      },
    );
  };

  const columnsGrabbed = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const eraseButton = (index) => {
    const newFilterByNumericValues = [...filters.filterValues];
    newFilterByNumericValues.splice(index, 1);
    columnsGrabbed.splice(columnsGrabbed
      .indexOf(filters.filterValues.column), 1);

    setFilter(
      {
        ...filters,
        filterValues: newFilterByNumericValues,
        columnToGrab: columnsGrabbed,
      },
    );
  };

  return (
    <div>
      <h1> Star Wars Planets</h1>
      <div>
        <input
          data-testid="name-filter"
          type="text"
          onChange={ ({ target }) => {
            setFilter({ ...filters, filterByName: { name: target.value } });
          } }
          placeholder="Busca por planetas"
        />
      </div>
      <div>
        <select
          data-testid="column-filter"
          name="column"
          onChange={ ({ target }) => {
            setColumn(target.value);
          } }
          placeholder="Tag"
        >
          Selecione
          {filters.columnToGrab.map((columnToGrab) => (
            <option value={ columnToGrab } key={ columnToGrab }>
              { columnToGrab}
            </option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ ({ target }) => {
            setCompare(target.value);
          } }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
        <input
          data-testid="value-filter"
          name="value"
          type="number"
          value={ value }
          onChange={ ({ target }) => {
            setValue(target.value);
          } }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ filterData }
        >
          Filtrar
        </button>
        <label htmlFor="column-sort">
          Ordenar por
          <select
            data-testid="column-sort"
            name="column"
            onChange={ (e) => changeSortValues(e) }
          >
            {columnsGrabbed
              .map((option) => (
                <option
                  key={ option }
                  value={ option }
                  name="column"
                >
                  { option}
                </option>))}
          </select>
        </label>
        <label htmlFor="asc">
          ASC
          <input
            required
            data-testid="column-sort-input-asc"
            type="radio"
            id="asc"
            name="sort"
            value="ASC"
            onChange={ (e) => changeSortValues(e) }
          />
        </label>
        <label htmlFor="desc">
          DESC
          <input
            required
            data-testid="column-sort-input-desc"
            type="radio"
            id="desc"
            name="sort"
            value="DESC"
            onChange={ (e) => changeSortValues(e) }
          />
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
        >
          Ordenar
        </button>
      </div>
      <div>
        {filters.filterValues.map((filter, index) => (
          <div key={ index } data-testid="filter">
            { `${filter.column} ${filter.comparison} ${filter.value}`}
            <button
              type="button"
              onClick={ () => eraseButton(index) }
            >
              X
            </button>
          </div>
        ))}
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
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
          {planetsFilter()
            .sort(setOrder)
            .map((planetName, index) => (
              <tr key={ index }>
                <td data-testid="planet-name">{planetName.name}</td>
                <td>{planetName.climate}</td>
                <td>{planetName.created}</td>
                <td>{planetName.diameter}</td>
                <td>{planetName.edited}</td>
                <td>{planetName.films}</td>
                <td>{planetName.gravity}</td>
                <td>{planetName.orbital_period}</td>
                <td>{planetName.population}</td>
                <td>{planetName.rotation_period}</td>
                <td>{planetName.surface_water}</td>
                <td>{planetName.terrain}</td>
                <td>{planetName.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlanetList;
