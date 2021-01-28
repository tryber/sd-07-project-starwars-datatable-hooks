import React from 'react';
// import { StarWarsContext } from '../context/StarWarsContext';

function NumericFilter() {
  // const { filter, numericFilter } = useContext(StarWarsContext);

  // const [columnFilter, setColumnFilter] = useState('');
  // const [comparisonFilter, setComparisonFilter] = useState('');
  // const [valueFilter, setValueFilter] = useState('');

  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const comparison = [
    'maior que',
    'menor que',
    'igual a',
  ];

  //

  return (

    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => setColumnFilter(value) }
      >
        { columns.map((column) => (
          <option key={ column } value={ column }>
            {column}
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => setComparisonFilter(value) }
      >
        {comparison.map((items) => <option key="items">{items}</option>)}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target: { value } }) => setValueFilter(value) }
      />
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ () => {} }
      >
        filtro
      </button>
    </div>);
}

export default NumericFilter;
