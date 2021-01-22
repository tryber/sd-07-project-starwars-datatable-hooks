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
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  const handleFilters = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...filter,
    }));
  };

  const context = {
    data,
    setData,
    filters,
    setFilters: handleFilters,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = { children: PropTypes.node.isRequired };

export { StarWarsContext, StarWarsProvider };
