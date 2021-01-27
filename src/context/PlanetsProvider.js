import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState({});
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [numericFiltersOptions, setNumericFiltersOptions] = useState({
    column: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
    comparison: [
      'maior que',
      'menor que',
      'igual a',
    ],
  });
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  useEffect(() => {
    fetchPlanets(setPlanets);
  }, [setPlanets]);

  const handleChangeName = (value) => {
    setFilters((current) => (
      { ...current,
        filterByName: {
          name: value,
        },
      }
    ));
  };

  const addFilter = (filter) => {
    setFilters((current) => (
      {
        ...current,
        filterByNumericValues: [...current.filterByNumericValues, filter],
      }
    ));
  };
  return (
    <main>
      <PlanetsContext.Provider
        value={ {
          planets,
          setPlanets,
          filteredPlanets,
          setFilteredPlanets,
          filters,
          setFilters,
          handleChangeName,
          addFilter,
          numericFiltersOptions,
          setNumericFiltersOptions,
        } }
      >
        { children }
      </PlanetsContext.Provider>
    </main>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsProvider;
