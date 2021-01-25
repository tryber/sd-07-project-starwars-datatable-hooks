import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filterNumber, setFilterNumber] = useState(false);
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [{
        column: '',
        comparison: '',
        value: 0,
      }],
    },
  });

  const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const fetchPlanets = async () => {
    try {
      const request = await fetch(endPoint);
      const response = await request.json();
      setData(response.results);
      setPlanets(response.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        planets,
        setPlanets,
        filters,
        setFilters,
        filterNumber,
        setFilterNumber,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = { children: PropTypes.element.isRequired };

export default Provider;
