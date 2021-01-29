import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../services/fetchPlanets';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const addPlanets = async () => {
    setData(await fetchPlanets());
    setIsLoading(false);
  };

  const context = {
    form,
    data,
    filters,
    isLoading,
    setForm,
    setData,
    setFilters,
    setIsLoading,
  };

  useEffect(() => {
    addPlanets();
  }, []);

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default PlanetsProvider;
