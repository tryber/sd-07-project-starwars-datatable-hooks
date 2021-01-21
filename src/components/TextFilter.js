import React from 'react';
import PropTypes from 'prop-types';
import { FilterContext } from '../context/FilterContextProvider';

const TextFilter = () => (
  <FilterContext.Consumer>
    { ({ allFilters, setAllFilters }) => (
      <div>
        Buscar:
        <input
          className="ui input"
          type="text"
          onChange={ ({ target: { value } }) => setAllFilters({ filters:
            { filterByName: { name: value },
              order: allFilters.filters.order,
              filterByNumericValues: allFilters.filters.filterByNumericValues } }) }
          data-testid="name-filter"
          placeholder="Search..."
          value={ allFilters.filters.filterByName.name }
        />
      </div>
    ) }
  </FilterContext.Consumer>
);

TextFilter.propTypes = {
  onChange: PropTypes.func,
}.isRequired;

export default TextFilter;
