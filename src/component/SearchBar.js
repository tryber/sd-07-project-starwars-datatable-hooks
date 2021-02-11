import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/starWarsContext';

function SearchBar() {
  const { planets, setFilterPlanets } = useContext(StarWarsContext);
  const { filterOptions, setFilterOptions } = useContext(StarWarsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [numberValue, setNumberValue] = useState('0');

  const handleFilterName = (value) => {
    setFilterPlanets(
      planets.filter((planet) => planet.name.toLowerCase().includes(value.toLowerCase())),
    );
  };

  const handleFilterButton = () => {
    console.log('switch', column, comparison, numberValue);
    switch (comparison) {
    case 'maior que':
      setFilterPlanets(
        planets.filter(
          (planet) => parseFloat(planet[column]) > parseFloat(numberValue),
        ),
      );
      break;
    case 'menor que':
      setFilterPlanets(
        planets.filter(
          (planet) => parseFloat(planet[column]) < parseFloat(numberValue),
        ),
      );
      // console.log('menor que');
      break;
    case 'igual a':
      setFilterPlanets(
        planets.filter(
          (planet) => Number(planet[column]) === Number(numberValue),
        ),
      );
      break;
    default:
      setFilterPlanets(planets);
    }
  };

  const handleRemoveFilter = () => {
    setFilterOptions([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
    setColumn('population');
    setComparison('maior que');
    setNumberValue('0');
    setFilterPlanets(planets);
    console.log('Remove filter:', column, comparison, numberValue);
  };

  const handleChangeColumn = ({ target: { value } }) => {
    setColumn(value);
    setFilterOptions(filterOptions.filter((option) => option !== value));
    console.log('Change column', column, comparison, numberValue);
  };

  const handleChangeComparison = ({ target: { value } }) => {
    setComparison(value);
    console.log('Change comparison', column, comparison, numberValue);
  };

  const handleChangeNumber = ({ target: { value } }) => {
    setNumberValue(value);
    console.log('Change number', column, comparison, numberValue);
  };

  const handleChangeSortInput = () => {
    console.log('handleChangeSortInput:');
  };

  return (
    <div>
      <label htmlFor="search">
        Filtre o filme pelo nome:
        <input
          name="search"
          type="text"
          data-testid="name-filter"
          onChange={ ({ target }) => handleFilterName(target.value) }
        />
      </label>
      <select data-testid="column-filter" onChange={ handleChangeColumn }>
        {filterOptions.map((option, index) => (
          <option key={ index }>{option}</option>
        ))}
      </select>
      <div data-testid="filter">
        <button type="button" onClick={ handleRemoveFilter }>
          x
        </button>
      </div>
      <select data-testid="comparison-filter" onChange={ handleChangeComparison }>
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <div data-testid="filter">
        <button type="button" onClick={ handleRemoveFilter }>
          x
        </button>
      </div>

      <input
        name="numberSearch"
        type="number"
        data-testid="value-filter"
        value={ numberValue }
        onChange={ handleChangeNumber }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilterButton }
      >
        Filtrar
      </button>

      <select data-testid="column-sort" onChange={ handleChangeSortInput }>
        <option value="population">population</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation period</option>
        <option value="surface_water">surface water</option>
      </select>

      <input
        type="radio"
        id="idAsc"
        data-testid="column-sort-input-asc"
        value="asc"
      />
      {/* <label htmlFor="idAsc">Ascendente</label> */}

      <input
        type="radio"
        id="idDesc"
        data-testid="column-sort-input-desc"
        value="desc"
      />
      {/* <label htmlFor="idDesc">Descendente</label> */}

      <button type="button" data-testid="column-sort-button">Ordenar</button>
    </div>
  );
}

export default SearchBar;
