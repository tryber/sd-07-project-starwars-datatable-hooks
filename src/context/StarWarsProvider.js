import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import starWarsApi from '../services/apiFetch';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [
      { column: '', comparison: '', value: '' },
    ],
  });

  useEffect(() => {
    starWarsApi().then((response) => {
      setPlanets(response);
    });
    setIsLoading(false);
  }, []);

  const filteringByName = ({ target }) => {
    const { value } = target;
    setFilters({
      ...filters,
      filterByName: { name: value },
    });
  };

  const data = {
    planets,
    isLoading,
    filteringByName,
    filters,
    setPlanets,
    setFilters,
  };

  return (
    <StarWarsContext.Provider value={ { data } }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default StarWarsProvider;
