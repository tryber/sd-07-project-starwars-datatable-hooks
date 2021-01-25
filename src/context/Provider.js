import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import {
  FILTER_NAME, FILTER_COLUMN, FilterReducert, FetchPlanetsReducer } from './reducers';
import StarWarsContext from './StarWarsContext';
import { fetchPlanets } from '../services';

const initialStatePlanets = { planets: [], loading: true };
const initialStateFilters = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: { column: 'name', sort: 'ASC' },
};

export default function Provider({ children }) {
  const [data, setPlanets] = useReducer(FetchPlanetsReducer, initialStatePlanets);
  const [filters, dispatchFilter] = useReducer(FilterReducert, initialStateFilters);

  useEffect(() => { fetchPlanets(setPlanets); }, []);

  const values = {
    data,
    filters,
    dispatchFilter,
    FILTER_NAME,
    FILTER_COLUMN,
  };
  return (
    <StarWarsContext.Provider value={ { ...values } }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
