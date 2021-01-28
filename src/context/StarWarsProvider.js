import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import starWarsApi from '../services/apiFetch';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: {
      column: '',
      comparsion: '',
      value: '',
    },
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
    console.log(filters);
  };

  const filteringByNumericValues = ({ target }) => {
    const { value, name } = target;
    const { filterByNumericValues } = filters;
    setFilters({
      ...filters,
      filterByNumericValues: { ...filterByNumericValues, [name]: value },
    });
  };

  const data = {
    planets,
    isLoading,
    filteringByName,
    filteringByNumericValues,
    filters,
    setPlanets,
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
