import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { getPlanets } from '../services/starwarsAPI';

const StarWarsProvider = ({ children }) => {
  const [data, setDataPlanets] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    async function fetchPlanets() {
      const { results } = await getPlanets();
      const dataPlanets = results;
      setDataPlanets(dataPlanets);
    }
    fetchPlanets();
  });

  const handleFilterByName = (input) => {
    const { value } = input.target;
    setFilterName(value);
  };

  const context = {
    data, // resultado da api
    filters: {
      filterByName: {
        name: filterName,
      },
    },
    handleFilterByName,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
