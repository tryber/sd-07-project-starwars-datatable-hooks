import React, { useContext } from 'react';
import { StarWarsContext } from '../../providers/StarWarsProvider';

const FilterByNum = () => {
  const { filterByNum, filters: { filterByNumericValues } } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    switch (id) {
    case 'order-by':
      return filterByNum(Object.assign(...filterByNumericValues, { column: value }));
    case 'greater-less':
      return filterByNum(Object.assign(...filterByNumericValues, { comparasion: value }));
    case 'number-value':
      return filterByNum(Object.assign(...filterByNumericValues, { value }));
    default:
      return null;
    }
  };

  return (
    <>
      <select
        id="order-by"
        data-testid="column-filter"
        onChange={ (e) => handleChange(e) }
        value={ filterByNumericValues.column }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        id="greater-less"
        data-testid="comparison-filter"
        onChange={ (e) => handleChange(e) }
        value={ filterByNumericValues.comparasion }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        id="number-value"
        data-testid="value-filter"
        type="number"
        value={ filterByNumericValues.value }
        onChange={ (e) => handleChange(e) }
      />
    </>
  );
};

export default FilterByNum;
