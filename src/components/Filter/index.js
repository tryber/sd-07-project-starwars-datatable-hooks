import React, { useContext, useState } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function Filter() {
  const { globalState, setGlobalState } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('greater');
  const initialValueFilter = 0;
  const [valueFilter, setValueFilter] = useState(initialValueFilter);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [options, setOptions] = useState(
    [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  );

  function handleChange({ target }) {
    const { value } = target;
    setFilterByName({ name: value });
    setGlobalState({
      filters: {
        filterByName: {
          name: value,
        },
        filterByNumericValues,
      },
    });
  }

  function sendFilters() {
    setFilterByNumericValues({
      column,
      comparison,
      value: valueFilter,
    });
    setGlobalState({
      filters: {
        filterByName,
        filterByNumericValues: [{
          column,
          comparison,
          value: valueFilter,
        }],
      },
    });

    const newOptionsArray = options.filter((option) => option !== column);
    setOptions(newOptionsArray);
  }

  return (
    <div>
      <input
        type="text"
        value={ globalState.filters.filterByName.name }
        onChange={ (e) => handleChange(e) }
        data-testid="name-filter"
      />
      <select
        name="column"
        data-testid="column-filter"
        value={ column }
        onChange={ (e) => setColumn(e.target.value) }
      >
        { options.map((option) => (
          <option value={ option } key={ option }>{option}</option>
        )) }
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ valueFilter }
        onChange={ (e) => setValueFilter(e.target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => sendFilters() }
      >
        Setar Filtro
      </button>
    </div>
  );
}

export default Filter;
