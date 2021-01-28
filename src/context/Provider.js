import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import StarWarsAPI from '../services/StarWarsAPI';

function Provider({ children }) {
  const INITIAL_STATE = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ ...INITIAL_STATE });

  const fetchPlanets = async () => {
    const planets = await StarWarsAPI();
    setData(planets.results);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const handleChangeValue = (name) => {
    setFilters({ ...filters, filterByName: { name } });
  };

  const handleChangeFilterByNumericValue = (field) => {
    const { filterByNumericValues } = filters;
    const magic = 0;
    if (filterByNumericValues.length > magic) {
      for (let i = magic; i < filterByNumericValues.length; i += 1) {
        console.log(JSON.stringify(filterByNumericValues[i]));
        if (JSON
          .stringify(filterByNumericValues[i]) === JSON
          .stringify(filterByNumericValues[i + 1])
        ) {
          return;
        }
      }
    } else {
      setFilters({
        ...filters,
        filterByNumericValues: [...filters.filterByNumericValues, field],
      });
    }
  };

  const contextValue = {
    data,
    filters,
    setFilters,
    handleChangeValue,
    handleChangeFilterByNumericValue,
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
