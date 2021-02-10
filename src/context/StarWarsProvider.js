import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setPlanets] = useState({});
  const [copyData, setCopyData] = useState({});
  const [filters, setFilters] = useState({ filterByName: { name: '' } });
  const [planetsError, setPlanetsError] = useState(false);
  const [planetsLoaded, setPlanetsLoaded] = useState(false);

  async function fetchData() {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

    await fetch(endpoint)
      .then((response) => (
        response.json()
          .then((json) => {
            const { results } = json;
            if (response.ok) {
              results.map((item) => delete item.residents);
              setPlanets(results);
              setCopyData(results);
            } else {
              setPlanetsError(results);
            }
            setPlanetsLoaded(true);
          })
      ));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const context = {
    data,
    setPlanets,
    copyData,
    setCopyData,
    planetsError,
    planetsLoaded,
    fetchData,
    filters,
    setFilters };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
};

export { StarWarsContext as Context, StarWarsProvider as Provider };

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
