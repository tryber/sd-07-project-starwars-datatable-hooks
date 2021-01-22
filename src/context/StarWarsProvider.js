import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/api';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [name, setName] = useState('');
  const [nameFiltered, setNameFiltered] = useState([]);

  const getPlanets = async () => {
    setData(await fetchPlanets());
    setIsFetching(false);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  useEffect(() => {
    setNameFiltered(
      data.filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase())),
    );
  }, [name, data]);

  return (
    <StarWarsContext.Provider
      value={
        {
          data,
          isFetching,
          setName,
          nameFiltered,
          filters: {
            filterByName: {
              name,
            },
          } }
      }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Provider;
