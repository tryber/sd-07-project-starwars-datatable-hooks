import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import starWarsApi from '../services/StarWarsApi';

function Provider({ children }) {
  const [data, setData] = useState([]);

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{
      column: 'population',
      comparison: 'maior que',
      value: '0',
    }],
  });

  const [options, setOptions] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  const [column, setColumn] = useState(options[0]);
  const [comparison, setComparison] = useState('maior que');
  const defaultValue = 0;
  const [value, setValue] = useState(defaultValue);

  const [filterData, setFilterData] = useState(data);

  const fetchPlanets = async () => {
    setData(await starWarsApi());
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const context = {
    data,
    setData,
    filters,
    setFilters,
    options,
    setOptions,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filterData,
    setFilterData,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
