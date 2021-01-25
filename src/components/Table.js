import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { thePlanets, filters, setFilters } = useContext(StarWarsContext);
  const zero = 0;
  const filterByName = (allPlanets) => (
    allPlanets.filter((planetName) => planetName.name.includes(filters.filterByName.name))
  );

  const biggerPlanet = (tableColum, number) => (
    parseInt(tableColum, 10) > parseInt(number, 10)
  );
  const smallerPlanet = (tableColum, number) => (
    parseInt(tableColum, 10) < parseInt(number, 10)
  );
  const sameSizePlanet = (tableColum, number) => (
    parseInt(tableColum, 10) === parseInt(number, 10)
  );

  const planetsCompare = (planetName, column, comparison, value) => {
    const comparing = {
      'maior que': biggerPlanet(planetName[column], value),
      'menor que': smallerPlanet(planetName[column], value),
      'igual a': sameSizePlanet(planetName[column], value),
    };
    return comparing[comparison];
  };

  const filterByValues = (allPlanets) => {
    const { filterByNumericValues } = filters;

    if (filterByNumericValues.length === zero) {
      return allPlanets;
    }

    return allPlanets.filter((planetName) => (filterByNumericValues.every((filter) => (
      planetsCompare(planetName, filter.column, filter.comparison, filter.value, filter)
    ))));
  };

  const filterAllPlanets = () => {
    const filteredByPlanetName = filterByName(thePlanets);
    const filteredByNumericValue = filterByValues(filteredByPlanetName);

    return filteredByNumericValue;
  };

  const [column, setColumn] = useState('population');
  const [comparison, setCompare] = useState('maior que');
  const [value, setValue] = useState(zero);

  const planetNamefilter = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };

  const columnFilter = ({ target }) => {
    setColumn(target.value);
  };

  const comparisonFilter = ({ target }) => {
    setCompare(target.value);
  };

  const valueFilter = ({ target }) => {
    setValue(target.value);
  };

  useEffect(() => {
    if (filters.columnToGrab.length > zero) {
      setColumn(filters.columnToGrab[zero]);
    }
  }, [filters.columnToGrab]);

  const buttonFilter = () => {
    const columnsGrabbed = filters.columnToGrab
      .filter((element) => element !== column);

    setFilters(
      { ...filters,
        filterByNumericValues: [
          ...filters.filterByNumericValues,
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

  const filterButton = (index) => {
    const columnsGrabbed = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const newFilterByNumericValues = [...filters.filterByNumericValues];
    newFilterByNumericValues.splice(index, 1);
    columnsGrabbed.splice(columnsGrabbed
      .indexOf(filters.filterByNumericValues.column), 1);

    setFilters(
      { ...filters,
        filterByNumericValues: newFilterByNumericValues,
        columnToGrab: columnsGrabbed,
      },
    );
  };

  return (
    <div>
      <h1>Star Wars - Planets</h1>
      <div>
        <input
          data-testid="name-filter"
          type="text"
          onChange={ planetNamefilter }
          placeholder="Busca por planetas"
        />
      </div>
      <div>
        <select
          data-testid="column-filter"
          name="column"
          onChange={ columnFilter }
          placeholder="Tag"
        >
          Selecione
          { filters.columnToGrab.map((columnToGrab) => (
            <option value={ columnToGrab } key={ columnToGrab }>
              { columnToGrab }
            </option>
          )) }
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ comparisonFilter }
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
          onChange={ valueFilter }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ buttonFilter }
        >
          Filtrar
        </button>
      </div>
      <div>
        { filters.filterByNumericValues.map((filter, index) => (
          <div key={ index } data-testid="filter">
            { `${filter.column} ${filter.comparison} ${filter.value}` }
            <button
              type="button"
              onClick={ () => filterButton(index) }
            >
              X
            </button>
          </div>
        )) }
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
          { filterAllPlanets().map((planetName, index) => (
            <tr key={ index }>
              <td>{ planetName.name }</td>
              <td>{ planetName.climate }</td>
              <td>{ planetName.created }</td>
              <td>{ planetName.diameter }</td>
              <td>{ planetName.edited }</td>
              <td>{ planetName.films }</td>
              <td>{ planetName.gravity }</td>
              <td>{ planetName.orbital_period }</td>
              <td>{ planetName.population }</td>
              <td>{ planetName.rotation_period }</td>
              <td>{ planetName.surface_water }</td>
              <td>{ planetName.terrain }</td>
              <td>{ planetName.url }</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
