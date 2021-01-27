import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState({});
  const [filteredPlanets, setFilteredPlanets] = useState([]);
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
    const { filterByNumericValues } = filters;
    const isRepeated = ({ column }) => filterByNumericValues.some(
      (f) => f.column === column,
    );
    if (!isRepeated(filter)) {
      setFilters((current) => (
        {
          ...current,
          filterByNumericValues: [...current.filterByNumericValues, filter],
        }
      ));
    }
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
