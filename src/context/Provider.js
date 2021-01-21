import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getStarWarsDataAPI from '../services/contextAPI';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setSearch] = useState('');
  const [filteredPlanets, setFilteredByName] = useState([]);

  const fetchPlanets = async () => {
    const response = await getStarWarsDataAPI();
    const planetsObject = response.results;
    setPlanets(planetsObject);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    setFilteredByName(
      planets.filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase())),
    );
  }, [name, planets]);

  return (
    <StarWarsContext.Provider
      value={
        { data: { planets },
          setSearch,
          filteredPlanets,
          filters: {
            filterByName: {
              name,
            },
          } }
      }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
