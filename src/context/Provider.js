import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getStarWarsDataAPI from '../services/contextAPI';

function Provider({ children }) {
  const noNull = 0;
  const negative = -1;
  const [planets, setPlanets] = useState([]);
  const [name, setSearchByName] = useState('');
  const [filteredPlanetsByName, setFilteredByName] = useState([]);
  const [column, setSearchFilterColumn] = useState('population');
  const [comparison, setSearchFilterComparison] = useState('maior que');
  const [value, setSearchFilterValue] = useState(noNull);
  const [objectFilter, setObjectFilter] = useState([]);
  const [filteredPlanetsByValue, setFilteredByValue] = useState([]);
  const [sortOption, setSortOption] = useState('ASC');
  const [columnToSort, setSearchFilterColumnSort] = useState('population');
  const [orderedList, setOrderedList] = useState([]);

  const [columnFilter, setColumnFilter] = useState(['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);
  const [comparisonFilter, setComparisonFilter] = useState(['maior que',
    'menor que',
    'igual a']);

  useEffect(() => {
    async function fetchPlanets() {
      const response = await getStarWarsDataAPI();
      const planetsObject = response.results;
      const orderedplanetsObject = planetsObject.sort((item1, item2) => {
        if (item1.name > item2.name) return 1;
        if (item1.name < item2.name) return negative;
        return noNull;
      });
      return setPlanets(orderedplanetsObject);
    }
    fetchPlanets();
  }, [negative]);

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

  function getToRender() {
    if (filteredPlanetsByValue.length > noNull) {
      return filteredPlanetsByValue;
    }
    if (filteredPlanetsByName.length > noNull) {
      return filteredPlanetsByName.sort((item1, item2) => item1.name - item2.name);
    }
    if (orderedList.length > noNull) {
      return orderedList;
    }
    return planets;
  }

  const orderList = () => {
    setOrderedList(...getToRender().sort((item1, item2) => {
      if (sortOption === 'ASC') {
        return (item1[columnToSort] - item2[columnToSort]);
      }
      return (item2[columnToSort] - item1[columnToSort]);
    }));
  };

  const filterBySetValues = () => {
    if (comparison === 'maior que') {
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
          getToRender,
          comparisonFilter,
          columnFilter,
          deleteFilter,
          setSortOption,
          setSearchFilterColumnSort,
          orderList,
          filters: {
            filterByName: {
              name,
            },
            filterByNumericValues: objectFilter,
            order: {
              column: columnToSort,
              sort: sortOption,
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
