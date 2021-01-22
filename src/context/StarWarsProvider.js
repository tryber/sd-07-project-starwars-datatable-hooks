import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/planetsAPI';

const { Provider } = StarWarsContext;

function StarWarsProvider({ children }) {
  const [isFetching, setIsFetching] = useState(false);

  const [header, setHeader] = useState();

  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      const planets = await getPlanets();
      setHeader(Object.keys(planets[0]));
      setData(planets);
      setIsFetching(false);
    }
    fetchData();
  }, []);

  const context = {
    isFetching,
    setIsFetching,
    header,
    setHeader,
    data,
    setData,
    getPlanets,
  };
  return <Provider value={ context }>{children}</Provider>;
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
