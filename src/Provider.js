import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './context/StarWarsContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([
    {
      climate: 'Arid',
      diameter: '10465',
      gravity: '1 standard',
      name: 'Tatooine',
      orbital_period: '304',
      population: '200000',
      rotation_period: '23',
      surface_water: '1',
      films: [],
      created: '',
      edited: '',
      terrain: 'Dessert',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/1/',
    },
  ]);

  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: 'Ari',
      },
    },
  });

  const [listNamesfilters, setListeNameFilters] = useState([]);

  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  async function user() {
    const { results } = await fetch(url)
      .then((response) => response.json());
    results.map((item) => delete item.residents);
    setPlanets(results);
    setListeNameFilters(results);
  }

  useEffect(() => {
    if (!filters.filterByName) return undefined;
    setListeNameFilters([...planets]
      .filter((planet) => planet.name.toLowerCase()
        .includes(filters.filterByName.name.toLowerCase())));
  }, [filters]);

  useEffect(() => {
    user();
  }, []);

  const states = {
    planets,
    setPlanets,
    filters,
    setFilters,
    listNamesfilters,
  };

  return (
    <StarWarsContext.Provider value={ states }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
