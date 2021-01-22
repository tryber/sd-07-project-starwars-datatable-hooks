import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getStarWarsDataAPI from '../services/contextAPI';

function Provider({ children }) {
  const noNull = 0;
  const [planets, setPlanets] = useState([]);
  const [name, setSearchByName] = useState('');
  const [filteredPlanetsByName, setFilteredByName] = useState([]);
  const [column, setSearchFilterColumn] = useState('population');
  const [comparison, setSearchFilterComparison] = useState('maior que');
  const [value, setSearchFilterValue] = useState(noNull);
  const [filteredPlanetsByValue, setFilteredByValue] = useState([]);

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
  const filterBySetValues = () => {
    if (comparison === 'maior que') {
      setFilteredByValue(
        planets.filter((planet) => planet[column]
          .includes(Object.values(planet[column]) > value)),
      );
    } else if (comparison === 'menor que') {
      setFilteredByValue(
        planets.filter((planet) => planet[column]
          .includes(Object.values(planet[column]) < value)),
      );
    } else {
      setFilteredByValue(
        planets.filter((planet) => planet[column]
          .includes(Object.values(planet[column]) === value)),
      );
    }
  };

  return (
    <StarWarsContext.Provider
      value={
        { data: { planets },
          setSearchByName,
          filteredPlanetsByName,
          setSearchFilterColumn,
          setSearchFilterComparison,
          setSearchFilterValue,
          filterBySetValues,
          filteredPlanetsByValue,
          filters: {
            filterByName: {
              name,
            },
            filterByNumericValues: [
              {
                column,
                comparison,
                value,
              },
            ],
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
