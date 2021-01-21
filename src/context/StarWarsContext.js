import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/StarWarsAPI';

const Context = createContext();
const { Provider } = Context;

function StarWarsContext({ children }) {
  const [data, setData] = useState([]);
  // const [isScanning, setScanning] = useState(true);
  // const [planets, setPlanets] = useState([]);

  // const handleSuccess = (json) => {
  //   console.log(json.results);
  //   const planets = [...json.results];
  //   setData([...planets]);
  // };

  // const handleError = (json) => {
  //   console.log(json);
  // };

  const fetchPlanets = async () => {
    setData(await getPlanets());
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const context = {
    data,
    fetchPlanets,
  };
  return (
    <Provider value={ context }>
      {children}
    </Provider>
  );
}

StarWarsContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StarWarsContext as Provider, Context };
