import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function Header() {
  const { setSearchByName,
    setSearchFilterColumn,
    setSearchFilterComparison,
    setSearchFilterValue,
    filterBySetValues } = useContext(StarWarsContext);

  const columnFilter = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const comparisonFilter = ['maior que', 'menor que', 'igual a'];

  return (
    <header>
      <div>
        <input
          type="text"
          name="name"
          id="name"
          data-testid="name-filter"
          onChange={ (e) => setSearchByName(e.target.value) }
        />
      </div>
      <div>
        <fieldset>
          <select
            data-testid="column-filter"
            name="column"
            id="column"
            onChange={ (e) => setSearchFilterColumn(e.target.value) }
          >
            { columnFilter.map((option) => (
              <option key={ option } value={ option }>{option}</option>
            ))}
          </select>
          <select
            data-testid="comparison-filter"
            name="comparison"
            id="comparison"
            onChange={ (e) => setSearchFilterComparison(e.target.value) }
          >
            { comparisonFilter.map((option) => (
              <option key={ option } value={ option }>{option}</option>
            ))}
          </select>
          <input
            type="number"
            name="number"
            id="number"
            data-testid="value-filter"
            onChange={ (e) => setSearchFilterValue(e.target.value) }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ () => filterBySetValues }
          >
            Filter
          </button>
        </fieldset>
      </div>
    </header>
  );
}

export default Header;
