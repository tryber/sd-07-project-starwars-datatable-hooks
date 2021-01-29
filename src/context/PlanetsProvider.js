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
  const ZERO = 0;
  const [isLoading, setIsLoading] = useState(true);
  const [numberClicks, setNumberClicks] = useState(ZERO);
  const [column, setColumn] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const addPlanets = async () => {
    setData(await fetchPlanets());
    setIsLoading(false);
  };

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, {
        column: form.column,
        comparison: form.comparison,
        value: form.value,
      }],
    });
    setNumberClicks(numberClicks + 1);

    const test = [];

    for (let i = ZERO; i < column.length; i += 1) {
      if (column[i] !== form.column) {
        test.push(column[i]);
      }
    }

    setColumn(test);

    setForm({
      column: column[0],
      comparison: 'maior que',
      value: 0,
    });
  };

  const context = {
    form,
    data,
    filters,
    isLoading,
    numberClicks,
    column,
    setForm,
    setData,
    setFilters,
    setIsLoading,
    setNumberClicks,
    handleClick,
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
