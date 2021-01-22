import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [nameFilter, setNameFilter] = useState('');
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  const handleFilterInput = (event) => {
    setNameFilter(event.target.value);
    setFilters({
      filterByName: { name: nameFilter },
    });
  };

  const context = {
    nameFilter,
    handleFilterInput,
    filters,
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
