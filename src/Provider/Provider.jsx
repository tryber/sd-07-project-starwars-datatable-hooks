import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../contextAPI/Context';
import planetsApi from '../services/getAPI';

function Provider(props) {
  const [data, setData] = useState([]);

  const getPlanet = async () => {
    const { results } = await planetsApi();
    setData(results);
  };

  useEffect(() => {
    getPlanet();
  }, []);

  const contexto = { data };

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
