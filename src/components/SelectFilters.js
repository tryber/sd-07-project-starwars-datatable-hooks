import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function SearchBar() {
  const {
    setFiltersByNumericValues,
    filterByNumericValues,
    setNewArray,
    SWPlanets,
  } = useContext(StarWarsContext);

  const [filterObject, setFilterObject] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const [options, setOptions] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  const hideOption = () => {
    setOptions((prevState) => (
      prevState.filter((item) => (
        item !== filterObject.column))
    ));
  };

  const removeFilter = (item) => {
    setNewArray(SWPlanets);
    setFiltersByNumericValues(filterByNumericValues
      .filter((planet) => planet.column !== item.column));
  };

  const onClick = () => {
    setFiltersByNumericValues([...filterByNumericValues, filterObject]);
    hideOption();
  };

  return (
    <div>
      <select
        name="column-filter"
        data-testid="column-filter"
        onChange={
          ({ target: { value } }) => setFilterObject({
            ...filterObject, column: value,
          })
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
          ({ target: { value } }) => setFilterObject({
            ...filterObject, comparison: value,
          })
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
          ({ target: { value } }) => setFilterObject({
            ...filterObject, value,
          })
        }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => onClick() }
      >
        Filtrar
      </button>
      { filterByNumericValues.map((item, index) => (
        <div key={ index } data-testid="filter">
          <p>
            { `Filter: ${item.column} ${item.comparison} ${item.value}` }
          </p>
          <button
            type="button"
            onClick={ () => removeFilter(item) }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
