import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const fetchPlanets = async () => {
    try {
      const request = await fetch(endPoint);
      const response = await request.json();
      setData(response.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <StarWarsContext.Provider value={ { data, setFilters, filters } }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = { children: PropTypes.element.isRequired };

export default Provider;
