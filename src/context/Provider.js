import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetApi from '../services/planetApi';

function Provider({ children }) {
  const [data, setPlanets] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });
  const [valueFilter, setValueFilter] = useState('');
  const [responseFilter, setRequestFilter] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const RequestAPI = async () => {
    setPlanets(await planetApi());
    setIsFetching(false);
  };

  const handleFilterName = (value) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
    setValueFilter(value);
  };

  useEffect(() => {
    RequestAPI();
  }, []);

  useEffect(() => {
    setRequestFilter(data.filter(({ name }) => name.includes(valueFilter)));
  }, [valueFilter, data]);

  const context = {
    data,
    isFetching,
    responseFilter,
    valueFilter,
    handleFilterName,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Provider;
