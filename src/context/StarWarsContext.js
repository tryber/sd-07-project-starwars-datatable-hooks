import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState({
    filterByName: '',
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => {
        const filteredColumns = json.results
          .map((planet) => {
            delete planet.residents;
            return planet;
          });

        setData(filteredColumns);
        setColumns(Object.keys(filteredColumns[0]));
      });
  }, []);

  const filterByName = (name) => {
    setFilter({ ...filters, filterByName: name });
  };

  const filterByNumericValues = (newNumericFilter) => {
    const { filterByNumericValues: filterNumeric } = filters;
    setFilter({
      ...filters,
      filterByNumericValues: [...filterNumeric, newNumericFilter],
    });
  };

  const orderBy = (sort, column) => {
    setFilter({
      ...filters,
      order: {
        sort,
        column,
      },
    });
  };

  const context = {
    data,
    filters,
    columns,
    filterByName,
    setFilter,
    filterByNumericValues,
    orderBy,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
};

export { StarWarsContext, StarWarsProvider as Provider };

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
