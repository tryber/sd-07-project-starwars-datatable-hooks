import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';
import fetchPlanets from '../services/StarWarsAPI';

function StarWarsProvider({ children }) {
  const zero = 0;
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [filterByName, setFilterByName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(zero);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function updatePlanets() {
      const planetsData = await fetchPlanets();
      setData(planetsData);
      setIsFetching(false);
    }
    updatePlanets();
  }, []);

  useEffect(() => {
    setFilteredData(data.filter((planet) => (
      (planet.name.toLowerCase().includes(filterByName.toLowerCase())))));
  }, [data, filterByName]);

  const contextValue = {
    data,
    setData,
    isFetching,
    setIsFetching,
    filterByName,
    setFilterByName,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filterByNumericValues,
    setFilterByNumericValues,
    filteredData,
    setFilteredData,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
