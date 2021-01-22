import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

function StarWarsProvider({ children }) {
  const [data, setData] = useState({
    results: [],
  });

  const [filters, setFilters] = useState({
    filtersByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const setNameFilter = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...filter,
    }));
  };

  const setColumnFilter = (filter) => {
    setFilters((prevFilters) => {
      const { filterByNumericValues } = prevFilters;
      const find = filterByNumericValues.find(({ column }) => column === filter.column);
      if (!find) filterByNumericValues.push(filter);
      return {
        ...prevFilters,
        filterByNumericValues,
      };
    });
  };

  const context = {
    data,
    setData,
    filters,
    setNameFilter,
    setColumnFilter,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = { children: PropTypes.node.isRequired };

export { StarWarsContext, StarWarsProvider };
