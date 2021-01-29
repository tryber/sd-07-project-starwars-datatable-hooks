import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StartWarsContext from './StarWarsContext';
import getPlanetsData from '../services';

function Provider({ children }) {
  const initialFilters = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };

  const [isFetching, setIsFetching] = useState(true);
  const [initialData, setInitialData] = useState([]);
  const [planetsProvider, setPlanetsProvider] = useState([]);
  const [filters, setFilters] = useState(initialFilters);

  const fetchPlanets = async () => {
    const { results } = await getPlanetsData();
    const expected = results.filter((result) => delete result.residents);
    setPlanetsProvider(expected);
    setInitialData(expected);
    setIsFetching(false);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const filterName = (name) => {
    const initialPlanets = initialData;
    setPlanetsProvider(initialPlanets
      .filter((planetName) => planetName.name.toLowerCase()
        .includes(name)));
  };

  const selectFilter = (column, comparison, value) => {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: prevState.filterByNumericValues
        .concat({ column, comparison, value }),
    }));
  };

  useEffect(() => {
    const filterPlanetsProvider = () => {
      let planetsFilter = initialData;
      filters.filterByNumericValues.forEach((filter) => {
        const { column, comparison, value } = filter;
        switch (comparison) {
        case 'maior que':
          planetsFilter = planetsFilter
            .filter((planet) => Number(planet[column]) > Number(value));
          break;
        case 'menor que':
          planetsFilter = planetsFilter
            .filter((planet) => Number(planet[column]) < Number(value));
          break;
        case 'igual a':
          planetsFilter = planetsFilter
            .filter((planet) => Number(planet[column]) === Number(value));
          break;
        default:
          return planetsFilter;
        }
      });
      setPlanetsProvider(planetsFilter);
      // return planetsFilter;
    };
    filterPlanetsProvider();
  }, [filters, initialData]);

  const context = {
    filters,
    isFetching,
    planetsProvider,
    selectFilter,
    filterName,
    // useFilter,
  };

  return (
    <StartWarsContext.Provider value={ context }>
      {children}
    </StartWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
