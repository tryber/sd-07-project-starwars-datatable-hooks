import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);

  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(url).then((response) => response.json());
      setData(results);
      setFilters(results);
    }
    fetchData();
  }, []);

  const filteredPlanetsByName = (value) => {
    let planetFiltred = null;

    if (value !== '') {
      planetFiltred = data.filter((planet) => planet.name.includes(value));
      setFilters(planetFiltred);
    } else {
      setFilters(data);
    }
  };

  const handleName = ({ target }) => {
    const { value } = target;
    filteredPlanetsByName(value);
  };
  return (
    <StarWarsContext.Provider value={ { filters, handleName } }>
      { children }
    </StarWarsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
