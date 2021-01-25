import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

function StarWarsProvider({ children }) {
  const [data, setData] = useState({});
  const [filters, setFilters] = useState({
    filtersByName: {
      name: '',
    },
  });

  const context = {
    data,
    setData,
    filters,
    setFilters,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StarWarsContext, StarWarsProvider };
