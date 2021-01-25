import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import DropDown from './DropDown';

const columnOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisonOptions = [
  'maior que',
  'menor que',
  'igual a',
];

const NumericFilter = () => {
  const { filters, dispatch, setCustomFilter } = useContext(StarWarsContext);
  const filtersValues = filters.filterByNumericValues;

  function handleChange({ target: { id, value } }) {
    setCustomFilter(false);
    filtersValues[0][id] = value;
    dispatch({ type: 'FILTER_BY_COLUMN', payload: filtersValues });
  }

  return (
    <div>
      <span>Filtrar por coluna:</span>
      <DropDown
        id="column"
        dataTest="column-filter"
        options={ columnOptions }
        selectValue={ filters.filterByNumericValues[0].column }
        handleChange={ handleChange }
      />
      <DropDown
        id="comparison"
        dataTest="comparison-filter"
        options={ comparisonOptions }
        selectValue={ filters.filterByNumericValues[0].comparison }
        handleChange={ handleChange }
      />
      <label htmlFor="value">
        Valor:
        <input
          id="value"
          type="number"
          data-testid="value-filter"
          value={ filters.filterByNumericValues[0].value }
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setCustomFilter(true) }
      >
        Filtrar
      </button>
    </div>
  );
};

export default NumericFilter;
