import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [filters, setFilters] = useState({ filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const handleNameFilterInput = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };

  // função de @vitor-rc1
  const addNumericFilter = (newFilter) => {
    const { filterByNumericValues: filterNumeric } = filters;
    setFilters({
      ...filters,
      filterByNumericValues: [...filterNumeric, newFilter],
    });
  };

  const context = {
    handleNameFilterInput,
    filters,
    addNumericFilter,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

export { StarWarsContext, StarWarsProvider as Provider };

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
