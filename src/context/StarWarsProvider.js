import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../services/fetchPlanets';

function StarWarsProvider({ children }) {
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [SWPlanets, setSWPlanets] = useState([]);
  const [newArray, setNewArray] = useState([]);
  const [filterByNumericValues, setFiltersByNumericValues] = useState([{
    column: 'population',
    comparison: 'maior que',
    value: '',
  }]);

  const [filters, setFilters] = useState({
    filterByName,
    filterByNumericValues: [],
  });

  const filteredPlanets = (inputChange) => {
    setNewArray(SWPlanets
      .filter((caracter) => caracter.name.toLowerCase().includes(inputChange)));
  };

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetchPlanets();
      results.forEach((item) => delete item.residents);
      setSWPlanets(results);
      setNewArray(results);
    };
    getPlanets();
  }, []);

  const applyFilters = () => {
    const { column, comparison, value } = filterByNumericValues[0];
    switch (comparison) {
    case ('maior que'):
      setNewArray(SWPlanets
        .filter((planet) => Number(planet[column]) > Number(value)));
      break;
    case ('menor que'):
      setNewArray(SWPlanets
        .filter((planet) => Number(planet[column]) < Number(value)));
      break;
    case ('igual a'):
      setNewArray(SWPlanets
        .filter((planet) => Number(planet[column]) === Number(value)));
      break;
    default:
      return newArray;
    }
  };

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
