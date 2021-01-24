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
  });
  useEffect(() => {
    fetchPlanets(setPlanets);
  }, [setPlanets]);

  const handleChangeName = (value) => {
    setFilters({
      filterByName: {
        name: value,
      },
    });
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
