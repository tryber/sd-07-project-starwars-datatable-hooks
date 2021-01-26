import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(url);
      const response = await request.json();
      delete response.results.residents;
      setData(response.results);
    };
    fetchData();
  }, []);

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const setFilterName = (name) => {
    setFilters({
      ...filters,
      filterByName: { name },
    });
  };

  const setSelect = (column, comparison, value) => {
    const selects = {
      column,
      comparison,
      value,
    };
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, selects],
    });
  }; // referência: Luciano Berchon

  const [filterData, setFilterData] = useState([]);
  const { name } = filters.filterByName;
  useEffect(() => {
    let filteredByName = data
      .filter((valueInputText) => valueInputText.name.includes(name));
    filters.filterByNumericValues.forEach((element) => {
      const { column, value, comparison } = element;
      filteredByName = filteredByName.filter((item) => {
        switch (comparison) {
        case 'maior que':
          return parseInt(item[column], 10) > parseInt(value, 10);
        case 'menor que':
          return parseInt(item[column], 10) < parseInt(value, 10);
        case 'igual a':
          return parseInt(item[column], 10) === parseInt(value, 10);
        default:
          return true;
        }
      });
    }); // referência: Luciano Berchon
    setFilterData(filteredByName);
  }, [name, data, filters.filterByNumericValues]); // referência Carol Andrade

  const contextValue = {
    data,
    setFilters,
    filterData,
    setSelect,
    setFilterName,
    filters,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
