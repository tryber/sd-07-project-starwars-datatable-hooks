import React, { useContext } from 'react';
import StarWarsContext from '../Provider/StarWarsContext';

function Filter() {
  const {
    filter,
    filterPlanet,
    onFilter,
    setFilterValue,
    setFilterComparison,
    setFilterColumn,
    columnOption,
    appFilter,
  } = useContext(StarWarsContext);

  const size = 0;
  const showFilter = () => {
    if (appFilter.length > size) {
      return appFilter.map((acc) => (
        <div key={ acc.value }>
          {acc.value}
          |
          {acc.column}
          |
          {acc.comparioson}
        </div>
      ));
    }
  };

  return (
    <div className="filter">
      <input
        type="text"
        name="serch"
        data-testid="name-filter"
        placeholder="Select your planet from confederation"
        className="input"
        onChange={ (event) => filterPlanet(event.target.value) }
        value={ filter.value }
      />
      <form>
        <select
          data-testid="column-filter"
          className="select-filter"
          onChange={ ({ target }) => setFilterColumn(target.value) }
        >
          {columnOption.map((acc) => (
            <option value={ acc } key={ acc }>
              {acc}
            </option>
          ))}
          {/* <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option> */}
        </select>
        <select
          data-testid="comparison-filter"
          className="select-filter"
          onChange={ ({ target }) => setFilterComparison(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
        <label htmlFor="input" className="label-filter">
          Value:
          <input
            type="number"
            data-testid="value-filter"
            id="input"
            className="filter-input"
            onChange={ ({ target }) => setFilterValue(target.value) }
          />
        </label>
        <button
          type="reset"
          data-testid="button-filter"
          className="btn-filter"
          onClick={ () => onFilter() }
        >
          Filtrar
        </button>
      </form>
      <div className="app-filter">{showFilter()}</div>
    </div>
  );
}

export default Filter;
