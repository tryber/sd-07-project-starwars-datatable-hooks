import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import starWarsAPI from '../services/Services';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  const [planetsFilters, setPlanetsFilters] = useState([]);

  const fetchPlanets = async () => {
    const { results } = await starWarsAPI();
    const expected = results.filter((result) => delete result.residents);
    setPlanets(expected);
    setPlanetsFilters(expected);
  };

  // const zero = 0;
  // const filterPlanetByName = () => {
  //   if (filters.filterByName.name.length === zero) return undefined;
  //   const filterToLowerCase = filters.filterByName.name.toLowerCase();
  //   const test = planetsFilters.filter((planet) => planet.name
  //     .toLowerCase().includes(filterToLowerCase));
  //   setPlanetsFilters(test);
  // };

  // useEffect(() => {
  //   if (filters.filterByName.name.length === zero) setPlanetsFilters(planets);
  //   filterPlanetByName();
  // }, [filters]);

  function filteredName() {
    if (!filters.filterByName) return undefined;
    return (planets
      .filter((planet) => planet.name.toLowerCase()
        .includes(filters.filterByName.name.toLowerCase())));
  }

  function filteredNumbers(filtradosPorNomes) {
    if (!filters.filterByNumericValues.length) {
      return setPlanetsFilters(filtradosPorNomes);
    }
    let resultadoFiltrado = filtradosPorNomes;
    filters.filterByNumericValues.forEach((filteredNumeric) => {
      resultadoFiltrado = resultadoFiltrado.filter((filtrado) => {
        switch (filteredNumeric.comparison) {
        case 'maior que':
          if (
            parseInt(filtrado[filteredNumeric.column], 10)
            > parseInt(filteredNumeric.value, 10)
          ) return true;
          break;
        case 'menor que':
          if (
            parseInt(filtrado[filteredNumeric.column], 10)
            < parseInt(filteredNumeric.value, 10)
          ) return true;
          break;
        case 'igual a':
          if (
            parseInt(filtrado[filteredNumeric.column], 10)
            === parseInt(filteredNumeric.value, 10)
          ) return true;
          break;
        default:
          return false;
        }
        return false;
      });
    });
    setPlanetsFilters(resultadoFiltrado);
  }

  useEffect(() => {
    const filtradosPorNomes = filteredName();
    filteredNumbers(filtradosPorNomes);
  }, [filters]);

  useEffect(() => {
    (fetchPlanets());
  }, []);

  const states = {
    planets,
    planetsFilters,
    filters,
    setPlanets,
    setFilters,
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
