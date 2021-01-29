import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getApi } from '../Services/useApi';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [state, setState] = useState({});
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  useEffect(() => {
    getApi('https://swapi-trybe.herokuapp.com/api/planets/').then((response) => {
      const requiredPlanets = response.results.map((rplanet) => {
        delete rplanet.residents;
        return rplanet;
      });
      setPlanets(requiredPlanets);
      setFilteredPlanets(requiredPlanets);
    });
  }, []);

  useEffect(() => {
    const { name } = filters.filterByName;
    const { filterByNumericValues } = filters;
    let fPlanets;
    if (name) {
      const nameFilter = new RegExp(`\\w*${name}\\w*`, 'i');
      fPlanets = planets.filter((planet) => nameFilter.test(planet.name));
    } else {
      fPlanets = [...planets];
    }

    filterByNumericValues.map(({ column, comparison, value }) => {
      switch (comparison) {
      case 'maior que':
        fPlanets = fPlanets
          .filter((pl) => parseInt(pl[column], 10) > [parseInt(value, 10)]);
        return fPlanets;
      case 'igual a':
        fPlanets = fPlanets
          .filter((pl) => pl[column] === value);
        return fPlanets;
      case 'menor que':
        fPlanets = fPlanets
          .filter((pl) => parseInt(pl[column], 10) < [parseInt(value, 10)]);
        return fPlanets;
      default:
        return fPlanets;
      }
    });
    setFilteredPlanets(fPlanets);
  }, [planets, filters]);

  const context = {
    state,
    setState,
    planets,
    filters,
    setFilters,
    filteredPlanets,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
