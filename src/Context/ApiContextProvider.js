import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ApiContext from './ApiContext';

const ApiContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: { name: '' },
      filterByNumericValues: [],
      order: { column: 'name', sort: 'ASC' },
    },
  });

  const funcFetch = async () => {
    const resposta = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const respostaJSON = await resposta.json();
    setData(respostaJSON.results);
  };

  useEffect(() => {
    funcFetch();
  }, []);

  return (
    <ApiContext.Provider
      value={ {
        data,
        setData,
        filter,
        setFilter,
        options,
        setOptions,
      } }
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;

ApiContextProvider.propTypes = { children: PropTypes.node.isRequired };
