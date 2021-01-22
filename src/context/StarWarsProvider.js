import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const fetchPlanets = async () => {
    const { results } = await fetch(endpoint).then((response) => response.json());
    setData([...results]);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    const planets = data.filter((planet) => (
      planet.name.includes(filters.filters.filterByName.name)
    ));
    setData(planets);
  }, [filters]);

  return (
    <StarWarsContext.Provider value={ { data, filters, setFilters } }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
