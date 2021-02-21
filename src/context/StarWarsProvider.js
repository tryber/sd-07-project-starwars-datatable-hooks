import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../services/fetchPlanets';

function StarWarsProvider({ children }) {
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [SWPlanets, setSWPlanets] = useState([]);
  const [newArray, setNewArray] = useState([]);
  const [filterByNumericValues, setFiltersByNumericValues] = useState([]);
  const [sortOrder, setSortOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });
  const [filters, setFilters] = useState({
    filterByName,
    filterByNumericValues: [],
    order: sortOrder,
  });

  const filteredPlanets = (inputChange) => {
    setNewArray(SWPlanets
      .filter((planetName) => planetName.name.toLowerCase().includes(inputChange)));
  };

  const applyFilters = (results) => {
    const zero = 0;
    let filteredArray = [...results];
    if (filterByNumericValues.length !== zero) {
      filterByNumericValues.forEach((item) => {
        const { column, comparison, value } = item;
        switch (comparison) {
        case ('maior que'):
          filteredArray = filteredArray
            .filter((planet) => Number(planet[column]) > Number(value));
          break;
        case ('menor que'):
          filteredArray = filteredArray
            .filter((planet) => Number(planet[column]) < Number(value));
          break;
        case ('igual a'):
          filteredArray = filteredArray
            .filter((planet) => Number(planet[column]) === Number(value));
          break;
        default:
          console.log('funfou');
        }
      });
    }
    filteredArray.sort((a, b) => {
      const positive = 1;
      const negative = -1;
      const noOrder = 0;
      const numericColumns = [
        'population',
        'orbital_period',
        'diameter',
        'rotation_period',
        'surface_water',
      ];
      if (numericColumns.includes(sortOrder.column)) {
        return sortOrder.sort === 'ASC'
          ? Number(a[sortOrder.column]) - Number(b[sortOrder.column])
          : Number(b[sortOrder.column]) - Number(a[sortOrder.column]);
      }
      if (a[sortOrder.column] > b[sortOrder.column]) {
        return sortOrder.sort === 'ASC' ? positive : negative;
      }
      if (a[sortOrder.column] < b[sortOrder.column]) {
        return sortOrder.sort === 'DESC' ? positive : negative;
      }
      return noOrder;
    });
    setNewArray(filteredArray);
  };

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetchPlanets();
      results.forEach((item) => delete item.residents);
      setSWPlanets(results);
      applyFilters(results);
    };
    getPlanets();
  }, []);

  useEffect(() => {
    applyFilters(SWPlanets);
  }, [filterByNumericValues, sortOrder]);

  const contextValueSW = {
    SWPlanets,
    setSWPlanets,
    filters,
    setFilters,
    filterByName,
    setFilterByName,
    newArray,
    setNewArray,
    filteredPlanets,
    applyFilters,
    setFiltersByNumericValues,
    filterByNumericValues,
    sortOrder,
    setSortOrder,
  };

  return (
    <main>
      <StarWarsContext.Provider value={ contextValueSW }>
        {children}
      </StarWarsContext.Provider>
    </main>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
