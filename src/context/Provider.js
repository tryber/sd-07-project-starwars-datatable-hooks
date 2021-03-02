import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanetsFetch from '../service/getPlanetsAPI';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [numericFilter, setNumericFilter] = useState([{
    column: 'population',
    comparison: 'maior que',
    value: '100000',
  }]);
  const [sortColumn, setSortColumn] = useState('name');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const fetchPlanets = async () => {
      const planetsList = await getPlanetsFetch();
      planetsList.map((planet) => delete planet.residents);
      setPlanets(planetsList);
      // console.log(planetsList);
      setFilteredPlanets(planetsList);
    };
    fetchPlanets();
  }, []);

  const value = {
    planets,
    filters: {
      filterByName: {
        name: filterByName,
      },
      filterByNumericValues: numericFilter,
    },
    setFilterByName,
    setNumericFilter,
    filteredPlanets,
    setFilteredPlanets,
    sortColumn,
    setSortColumn,
    sortOrder,
    setSortOrder,
  };

  return (
    <StarWarsContext.Provider value={ value }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = { children: PropTypes.node.isRequired };

export default Provider;
