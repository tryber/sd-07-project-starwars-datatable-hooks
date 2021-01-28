import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanet from '../services/planetAPI';
import filterByTag from '../services/funcions';

const { Provider } = StarWarsContext;
const ProviderStarWars = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const [tempFilter, setTemp] = useState({
    column: '',
    comparison: 'maior que',
    value: '100000',
  });

  const fetchdata = async () => {
    const results = await getPlanet();
    const { filterByName, filterByNumericValues } = filters;
    const { name } = filterByName;
    const planetList = await filterByTag([...results], name, filterByNumericValues);
    setData(planetList);
  };

  const tags = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  useEffect(() => {
    fetchdata();
  }, []);

  const handleInput = ({ target }) => {
    setFilters({ ...filters,
      filterByName: {
        ...filters.filterByName,
        name: target.value } });
  };

  const handleInputNumbers = (input, { target }) => {
    setTemp({ ...tempFilter, [input]: target.value });
    console.log({ tempFilter, target: target.value });
  };

  const addFilter = () => {
    setFilters({ ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        tempFilter] });
  };

  const context = {
    data,
    filters,
    handleInput,
    handleInputNumbers,
    tags,
    addFilter,
    tempFilter,
  };

  return (
    <Provider value={ context }>
      { children }
    </Provider>
  );
};

ProviderStarWars.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderStarWars;
