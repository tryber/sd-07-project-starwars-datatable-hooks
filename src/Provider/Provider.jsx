import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../contextAPI/Context';
import planetsApi from '../services/getAPI';

function Provider(props) {
  const initial = {

    filters: { filterByName: { name: '' } } };

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(initial);

  const getPlanet = async () => {
    const { results } = await planetsApi();
    setData(results);
  };

  const onHandleChange = (event) => {
    const { value } = event.target;
    setFilters({ filters: { filterByName: { name: value } } });
  };

  useEffect(() => {
    getPlanet();
  }, []);

  const contexto = { data, filters, onHandleChange };

  const { children } = props;

  return (
    <Context.Provider value={ contexto }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
