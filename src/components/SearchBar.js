import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const SearchBar = () => {
  const { setFilter, filterByNames } = useContext(StarWarsContext);
  const [state, setState] = useState({
    column: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'],
    comparison: [
      'maior que',
      'menor que',
      'igual a'],
    filters: {
      filterByName: { name: undefined },
      filterByNumericValues: {
        column: 'population',
        comparison: 'maior que',
        value: undefined,
      },
    },
  });

  function saveFilters() {
    setFilter({ ...state, filters: state.filters });
  }
  function filterByNumeric({ target: { value, name } }) {
    setState({
      ...state,
      filters: {
        ...state.filters,
        filterByNumericValues: {
          ...state.filters.filterByNumericValues,
          [name]: value,
        },
      },
    });
  }

  return (
    <div>
      <label htmlFor="seachByName">
        Procurar por nome:
        <input
          type="text"
          id="searchByName"
          data-testid="name-filter"
          name="name"
          onChange={ (e) => filterByNames(e) }
        />
      </label>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ (e) => filterByNumeric(e) }
      >
        {state.column.filter((option) => <option key={ option }>{option}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ (e) => filterByNumeric(e) }
      >
        {state.comparison.map((option) => <option key={ option }>{option}</option>)}
      </select>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        onChange={ (e) => filterByNumeric(e) }

      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ saveFilters }
      >
        Filtrar
      </button>
    </div>
  );
};

export default SearchBar;
