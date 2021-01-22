import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const dataInitialState = [];
  const filterInitialState = {
    filterByName: {
      name: '',
    },
  };

  const [data, setData] = useState(dataInitialState);
  const [filters, setFilter] = useState(filterInitialState);

  const contextValue = {
    data,
    setData,
    filters,
    setFilter,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
