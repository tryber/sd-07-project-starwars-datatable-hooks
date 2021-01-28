import React, { useState, useEffect } from 'react';
import StarWarsContext from './context/StarWarsContext';
import getPlanet from './services/planetAPI';
import Filter from './components/Filter';
import PlanetsList from './components/PlanetsList';

const { Provider } = StarWarsContext;
const App = () => {
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
    setData([...results]);
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
      <Filter />
      <PlanetsList />
    </Provider>
  );
};

export default App;
