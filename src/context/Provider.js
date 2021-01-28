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
    let isRepetead = false;
    if (filterByNumericValues.length > magic) {
      filterByNumericValues.find((filter) => {
        if (filter.column === field.column
          && filter.comparison === field.comparison
          && filter.value === field.value
        ) {
          isRepetead = true;
        }
        return isRepetead;
      });
    }
    if (isRepetead) return;
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, field],
    });
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
