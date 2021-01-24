import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import Services from '../services/PlanetService';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const isEmpty = 0;

  const onFetchPlanets = async () => {
    const planetsRes = await Services.fetchPlanets();
    setPlanets(planetsRes.results);
  };

  const filterPlanetByName = (text) => {
    const filteredPlanets = planets.filter((planet) => planet.name.includes(text));
    if (text === '') {
      setFiltered(planets);
    } else {
      setFiltered(filteredPlanets);
    }
  };
  const onHandleChange = (e) => {
    const { value } = e.target;
    setFilterByName(value);
    filterPlanetByName(value);
  };
  useEffect(() => {
    onFetchPlanets();
  }, []);

  const contextValue = {
    data: planets,
    filtered: filtered.length === isEmpty ? planets : filtered,
    filters: {
      filterByName: {
        name: filterByName,
      },
    },
    functions: {
      onHandleChange,
    },
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
