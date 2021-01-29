import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const initialFilterState = {
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValue: [],
      order: {
        column: 'name',
        sort: 'ASC',
      },
    },
  };

  const [planetsData, updatePlanets] = useState({});
  const [filter, updateFilter] = useState(initialFilterState);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  async function fetchPlanets(urlFetch) {
    const planetsDataResp = await fetch(urlFetch)
      .then((response) => response.json())
      .catch((error) => error.message);
    updatePlanets(planetsDataResp);
  }

  useEffect(() => {
    async function initialFetch() {
      await fetchPlanets(url);
    }
    initialFetch();
  }, [url]);

  const updateFilterByName = ({ target }) => {
    const { value } = target;
    updateFilter({
      ...filter,
      filters: {
        ...filter.filters, filterByName: { name: value },
      },
    });
  };

  const removeFilterByNumericValue = (newFilterByNumericValue) => {
    updateFilter({
      ...filter,
      filters: {
        ...filter.filters,
        filterByNumericValue: newFilterByNumericValue },
    });
  };

  const updateByNumericValue = (object) => {
    updateFilter({
      ...filter,
      filters: {
        ...filter.filters,
        filterByNumericValue: [
          ...filter.filters.filterByNumericValue, object] },
    });
  };

  const updateOrderAscDesc = (object) => {
    updateFilter({
      ...filter,
      filters: {
        ...filter.filters,
        order: object },
    });
  };

  const planetContext = {
    filter,
    planetsData,
    removeFilterByNumericValue,
    updateFilterByName,
    updateByNumericValue,
    updateOrderAscDesc,
  };

  return (
    <PlanetsContext.Provider value={ planetContext }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = { children: PropTypes.node.isRequired };

export default PlanetsProvider;
