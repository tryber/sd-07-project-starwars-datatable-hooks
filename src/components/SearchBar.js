import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const SearchBar = () => {
  const { filterByNames, filterByNumeric } = useContext(StarWarsContext);
  const column = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
  const comparison = [
    'maior que',
    'menor que',
    'igual a',
  ];
  return (
    <div>
      <label htmlFor="searchByName">
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
        {column.map((option) => <option key={ option }>{option}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ (e) => filterByNumeric(e) }
      >
        {comparison.map((option) => <option key={ option }>{option}</option>)}
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
      >
        Filtrar
      </button>
    </div>
  );
};

export default SearchBar;
