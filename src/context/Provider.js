import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import PlanetAPI from '../services/PlanetStarWarsAPI';

function MyProvider({ children }) {
  const { Provider } = StarWarsContext;
  const [isFetching, setFetching] = useState(true);
  const [planets, setPlanets] = useState([]);
  const [keysPlanets, setkeysPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: { column: 'name', sort: 'ASC' },
  });

  const stateValues = {
    isFetching,
    setFetching,
    planets,
    setPlanets,
    keysPlanets,
    setkeysPlanets,
    filters,
    setFilters,
  };

  const fetchData = async () => {
    const data = await PlanetAPI();
    setPlanets(data.results);
    setFetching(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Provider value={ stateValues }>{ children }</Provider>;
}

export default MyProvider;

MyProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
