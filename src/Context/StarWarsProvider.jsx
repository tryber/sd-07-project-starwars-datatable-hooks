import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';

const empty = 0;

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [availableFilters, setAvailableFilters] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const [filters, setFilters] = useState(
    {
      filterByName: { name: '' },
      filterByNumericValues: [],
      order: { column: 'name', sort: 'ASC' },
    },
  );

  useEffect(() => {
    const { name } = filters.filterByName;
    if (name) {
      setFilteredData((state) => state.filter((planet) => planet.name.includes(name)));
    }
    if (!name) {
      setFilteredData(data);
    }
  }, [filters.filterByName, data]);

  useEffect(() => {
    if (filters.filterByNumericValues.length !== empty) {
      let newFilteredData;

      filters.filterByNumericValues.forEach(({ comparison, column, value }) => {
        newFilteredData = data.filter((planet) => {
          if (comparison === 'maior que') return Number(planet[column]) > Number(value);
          if (comparison === 'igual a') return Number(planet[column]) === Number(value);
          return Number(planet[column]) < Number(value);
        });
      });

      setFilteredData(newFilteredData);
    }
  }, [filters.filterByNumericValues, data]);

  const onChangeName = (event) => {
    const { value } = event.target;

    setFilters((state) => ({
      ...state,
      filterByName: {
        name: value,
      },
    }));
  };

  const onFilter = (column, comparison, value) => {
    setFilters((state) => ({
      ...state,
      filterByNumericValues: [
        ...state.filterByNumericValues,
        { column, comparison, value },
      ],
    }));

    setAvailableFilters((state) => state.filter((option) => option !== column));
  };

  const onRemoveFilter = (colToRemove) => {
    setFilters((state) => ({
      ...state,
      filterByNumericValues: [
        ...state.filterByNumericValues.filter(({ column }) => column !== colToRemove),
      ],
    }));
    setAvailableFilters((state) => [...state, colToRemove]);
    setFilteredData(data);
  };

  const onSort = (sortColumn, sortOrder) => {
    setFilters((state) => ({
      ...state,
      order: { column: sortColumn, sort: sortOrder },
    }));
  };

  const state = {
    data,
    setData,
    filteredData,
    setFilteredData,
    filters,
    setFilters,
    name: filters.filterByName.name,
    onChangeName,
    onFilter,
    availableFilters,
    filterByNumericValues: filters.filterByNumericValues,
    column: filters.order.column,
    sort: filters.order.sort,
    onRemoveFilter,
    onSort,
  };

  return (
    <StarWarsContext.Provider value={ state }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = { children: PropTypes.node.isRequired };

export default StarWarsProvider;
