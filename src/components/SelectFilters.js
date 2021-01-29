import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function SearchBar() {
  const {
    setFiltersByNumericValues,
    filterByNumericValues,
    applyFilters,
  } = useContext(StarWarsContext);

  const [options, setOptions] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  const hideOption = () => {
    setOptions((prevState) => (
      prevState.filter((item) => (
        item !== filterByNumericValues[0].column))
    ));
  };

  return (
    <div>
      <select
        name="column-filter"
        data-testid="column-filter"
        onChange={
          ({ target: { value } }) => setFiltersByNumericValues([{
            ...filterByNumericValues[0], column: value,
          }])
        }
      >
        {options.map((item) => (
          <option key={ item } value={ item }>{item}</option>
        ))}
      </select>
      <select
        name="comparison-filter"
        data-testid="comparison-filter"
        onChange={
          ({ target: { value } }) => setFiltersByNumericValues([{
            ...filterByNumericValues[0], comparison: value,
          }])
        }
      >
        <option value="maior que">
          maior que
        </option>
        <option value="menor que">
          menor que
        </option>
        <option value="igual a">
          igual a
        </option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        placeholder="Number"
        onChange={
          ({ target: { value } }) => setFiltersByNumericValues([{
            ...filterByNumericValues[0], value,
          }])
        }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          applyFilters();
          hideOption();
        } }
      >
        Filtrar
      </button>
    </div>
  );
}
