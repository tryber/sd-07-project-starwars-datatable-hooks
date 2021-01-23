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
  const [objectFilter, setObjectFilter] = useState([]);
  const [filteredPlanetsByValue, setFilteredByValue] = useState([]);

  const [columnFilter, setColumnFilter] = useState(['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);
  const [comparisonFilter, setComparisonFilter] = useState(['maior que',
    'menor que',
    'igual a']);

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
      [...planets].filter((planet) => planet.name.toLowerCase()
        .includes(name.toLowerCase())),
    );
  }, [name, planets]);

  const deleteFilter = (param1, param2) => {
    setObjectFilter(objectFilter.filter((item) => item.column !== param1));
    setColumnFilter([...columnFilter, param1]);
    setComparisonFilter([...comparisonFilter, param2]);
    setFilteredByValue([]);
  };
  const filterBySetValues = () => {
    if (comparison === 'maior que') {
      console.log('entrou na condicao');
      setFilteredByValue(
        [...planets].filter((planet) => (Number(planet[column]) > Number(value))),
      );
      setObjectFilter([...objectFilter, { column, comparison, value }]);
      setColumnFilter(columnFilter.filter((item) => item !== column));
      setComparisonFilter(comparisonFilter.filter((item) => item !== comparison));
    } else if (comparison === 'menor que') {
      setFilteredByValue(
        [...planets].filter((planet) => (Number(planet[column]) < Number(value))),
      );
      setObjectFilter([...objectFilter, { column, comparison, value }]);
      setColumnFilter(columnFilter.filter((item) => item !== column));
      setComparisonFilter(comparisonFilter.filter((item) => item !== comparison));
    } else {
      setFilteredByValue(
        [...planets].filter((planet) => (Number(planet[column]) === Number(value))),
      );
      setObjectFilter([...objectFilter, { column, comparison, value }]);
      setColumnFilter(columnFilter.filter((item) => item !== column));
      setComparisonFilter(comparisonFilter.filter((item) => item !== comparison));
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
          comparisonFilter,
          columnFilter,
          deleteFilter,
          filters: {
            filterByName: {
              name,
            },
            filterByNumericValues: objectFilter,
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
