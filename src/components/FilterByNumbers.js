import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByNumbers() {
  const {
    data,
    filters,
    setFilters,
    options,
    setOptions,
    filterData,
    setFilterData,
  } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;

  const NumericFilter = (filter) => {
    setFilters({
      ...filters,
      filterfilterByNumericValues: [filter],
    });
  };

  const OptionsFilter = (filter) => {
    setOptions(options.filter((option) => option !== filter));
  };

  const HandleNumFilter = ({ target }) => {
    const { id, value } = target;
    switch (id) {
    case 'column':
      return NumericFilter(Object
        .assign(...filterByNumericValues, { column: value }));
    case 'comparison':
      return NumericFilter(Object
        .assign(...filterByNumericValues, { comparison: value }));
    case 'value':
      return NumericFilter(Object
        .assign(...filterByNumericValues, { value }));
    default:
      return null;
    }
  };

  const NumFilterButton = () => {
    setFilterData(filterData.filter((planet) => {
      const { column, comparison, value } = filterByNumericValues[0];
      OptionsFilter(column);
      switch (comparison) {
      case 'maior que':
        if (planet[column] === 'unknown') {
          return false;
        }
        return Number(planet[column]) > Number(value);
      case 'menor que':
        if (planet[column] === 'unknown') {
          return false;
        }
        return Number(planet[column]) < Number(value);
      case 'igual a':
        return planet[column] === value;
      default:
        return null;
      }
    }));
  };

  const resetFilter = () => {
    setOptions([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
    setFilters({
      filterByName: { name: '' },
      filterByNumericValues: [{
        column: 'population',
        comparison: 'maior que',
        value: '0',
      }],
    });
  };

  const removeFilters = () => {
    setFilterData(data);
    resetFilter();
  };

  return (
    <section>
      <label htmlFor="column">
        Property:
        <select
          data-testid="column-filter"
          id="column"
          value={ filterByNumericValues.column }
          onChange={ HandleNumFilter }
        >
          {options
            .map((opt) => <option key={ opt } value={ opt }>{ opt }</option>)}
        </select>
      </label>

      <label htmlFor="comparison">
        Parameter:
        <select
          data-testid="comparison-filter"
          id="comparison"
          value={ filterByNumericValues.comparison }
          onChange={ HandleNumFilter }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="value">
        Value:
        <input
          data-testid="value-filter"
          id="value"
          type="number"
          value={ filterByNumericValues.value }
          onChange={ HandleNumFilter }
        />
      </label>

      <button
        data-testid="button-filter"
        type="button"
        onClick={ NumFilterButton }
      >
        Filter
      </button>

      <div data-testid="filter">
        <button
          type="button"
          onClick={ removeFilters }
        >
          X
        </button>
      </div>

    </section>
  );
}

export default FilterByNumbers;
