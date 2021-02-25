import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StartWarsContext';

function Form() {
  const {
    options,
    filters,
    setClick,
    setFilters,
    setOptions,
    dataOrigin,
    setData,
  } = useContext(StarWarsContext);

  const [aux, setAux] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const reset = () => {
    (
      setOptions({
        population: true,
        orbital_period: true,
        diameter: true,
        rotation_period: true,
        surface_water: true,
      }));
    setData({ dataOrigin });
  };

  const selectOptions = () => (
    <select
      data-testid="column-filter"
      name="column"
      onChange={ (event) => {
        setAux({ ...aux, column: (event.target.value) });
        setFilters({ ...filters,
          filterByNumericValues: [...filters.filterByNumericValues, aux] });
        setOptions({ ...options, [event.target.value]: false });
      } }
    >
      <option value="" selected disabled hidden>Choose here</option>
      { !options
        ? null
        : Object.keys(options)
          .map((column, index) => (
            <option key={ index } value={ `${column}` }>
              { !options[column] ? null : column }
            </option>
          ))}
    </select>
  );

  return (
    <div>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Search by name"
          name="name"
          onChange={ (event) => setFilters(
            { ...filters, filterByName: { name: event.target.value } },
          ) }
        />
        { selectOptions() }
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ (event) => setAux({ ...aux, comparison: (event.target.value) }) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          placeholder="value"
          name="value"
          value={ filters.filterValue }
          onChange={ (event) => setAux({ ...aux, value: (event.target.value) }) }
        />
        <button
          type="button"
          name="button"
          data-testid="filter"
          // disabled
          onClick={ () => reset(dataOrigin) }
        >
          X
        </button>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => setClick(true) }
        >
          Search by value
        </button>
      </form>
      { console.log(aux)}
    </div>
  );
}

export default Form;
